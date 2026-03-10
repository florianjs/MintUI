import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Resolve directories relative to this file (dist/mcp-server.mjs → …/)
const PKG_ROOT = join(__dirname, '..');
const COMPONENTS_DIR = join(PKG_ROOT, 'app', 'components', 'Ui');
const DEMOS_DIR = join(PKG_ROOT, 'app', 'showcase', 'demos');
const CSS_DIR = join(PKG_ROOT, 'app', 'assets', 'css');

// Read package.json for dynamic naming
const pkg = JSON.parse(readFileSync(join(PKG_ROOT, 'package.json'), 'utf-8'));
const PKG_NAME: string = pkg.name;
const PKG_VERSION: string = pkg.version;

// --- Load component data ---

interface ComponentInfo {
  name: string; // e.g. "Button"
  slug: string; // e.g. "button", "navbar-centered"
  source: string; // .vue file content
  demo: string | null; // showcase demo file content
  props: string[]; // extracted prop lines
  variants: string[]; // extracted variant values
}

function toKebabSlug(name: string): string {
  return name.replace(/([A-Z])/g, (c, _m, offset) =>
    offset === 0 ? c.toLowerCase() : '-' + c.toLowerCase(),
  );
}

function parseProps(source: string): string[] {
  const propsMatch = source.match(/interface Props \{([\s\S]*?)\}/);
  if (!propsMatch) return [];
  return propsMatch[1]
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('//'));
}

function parseVariants(source: string): string[] {
  // Look for type unions like: type ButtonVariant = 'default' | 'destructive' | ...
  const typeMatches = source.matchAll(
    /type \w+ =\s*((?:\s*\|?\s*'[^']+'\s*)+);/g,
  );
  const variants: string[] = [];
  for (const m of typeMatches) {
    const values = m[1].match(/'([^']+)'/g);
    if (values) variants.push(...values.map((v) => v.replace(/'/g, '')));
  }
  return variants;
}

function loadComponents(): Map<string, ComponentInfo> {
  const components = new Map<string, ComponentInfo>();

  if (!existsSync(COMPONENTS_DIR)) return components;

  const files: string[] = readdirSync(COMPONENTS_DIR);

  // Filter component .vue files (exclude test files)
  const vueFiles = files.filter((f) => f.endsWith('.vue'));

  const demoFiles = existsSync(DEMOS_DIR)
    ? new Set(readdirSync(DEMOS_DIR))
    : new Set<string>();

  for (const vueFile of vueFiles) {
    const name = vueFile.replace('.vue', '');
    const slug = toKebabSlug(name);
    const source = readFileSync(join(COMPONENTS_DIR, vueFile), 'utf-8');

    const demoFile = `${slug}.vue`;
    const demo = demoFiles.has(demoFile)
      ? readFileSync(join(DEMOS_DIR, demoFile), 'utf-8')
      : null;

    components.set(slug, {
      name,
      slug,
      source,
      demo,
      props: parseProps(source),
      variants: parseVariants(source),
    });
  }

  return components;
}

function loadDesignTokens(): string {
  const cssPath = join(CSS_DIR, 'tailwind.css');
  if (!existsSync(cssPath)) return '';
  return readFileSync(cssPath, 'utf-8');
}

const components = loadComponents();
const designTokens = loadDesignTokens();

const server = new McpServer({
  name: PKG_NAME,
  version: PKG_VERSION,
});

// --- Resources: expose each component source + stories ---

for (const [slug, comp] of components) {
  server.registerResource(
    `${comp.name}.vue`,
    `${PKG_NAME}://components/${slug}/source`,
    {
      description: `Vue source code for Ui${comp.name}`,
      mimeType: 'text/plain',
    },
    async (uri) => ({
      contents: [{ uri: uri.href, mimeType: 'text/plain', text: comp.source }],
    }),
  );

  if (comp.demo) {
    const demoText = comp.demo;
    server.registerResource(
      `${comp.slug}.demo.vue`,
      `${PKG_NAME}://components/${slug}/demo`,
      {
        description: `Showcase demo for Ui${comp.name}`,
        mimeType: 'text/plain',
      },
      async (uri) => ({
        contents: [
          { uri: uri.href, mimeType: 'text/plain', text: demoText },
        ],
      }),
    );
  }
}

server.registerResource(
  'tailwind.css',
  `${PKG_NAME}://design-tokens`,
  {
    description: 'Design tokens: CSS variables for light and dark mode',
    mimeType: 'text/css',
  },
  async (uri) => ({
    contents: [{ uri: uri.href, mimeType: 'text/css', text: designTokens }],
  }),
);

// --- Tools ---

server.registerTool(
  'get_component',
  {
    description:
      'Get the full Vue source code and showcase demo for a UI component. Returns the .vue source, extracted props, variants, and demo usage.',
    inputSchema: {
      component: z
        .string()
        .describe(
          'Component name (e.g. "button", "input", "badge", "card", "avatar", "switch", "separator")',
        ),
    },
  },
  async ({ component }) => {
    const slug = component.toLowerCase();
    const comp = components.get(slug);
    if (!comp) {
      const available = Array.from(components.keys());
      return {
        content: [
          {
            type: 'text',
            text: `Component "${slug}" not found. Available: ${available.join(', ')}`,
          },
        ],
      };
    }

    const sections = [
      `# Ui${comp.name}`,
      '',
      `## Props`,
      comp.props.length
        ? comp.props.map((p) => `- ${p}`).join('\n')
        : 'No props (slot-only component)',
      '',
      comp.variants.length
        ? `## Variants\n${comp.variants.map((v) => `- \`${v}\``).join('\n')}`
        : '',
      '',
      `## Source (${comp.name}.vue)`,
      '```vue',
      comp.source,
      '```',
    ];

    if (comp.demo) {
      sections.push(
        '',
        `## Demo (${comp.slug}.vue)`,
        '```vue',
        comp.demo,
        '```',
      );
    }

    return {
      content: [{ type: 'text', text: sections.join('\n') }],
    };
  },
);

server.registerTool(
  'list_components',
  {
    description:
      'List all available UI components with their props and variants.',
  },
  async () => {
    const lines = Array.from(components.values()).map((comp) => {
      const propsStr = comp.props.length
        ? comp.props.map((p) => `  ${p}`).join('\n')
        : '  (slot only)';
      const variantsStr = comp.variants.length
        ? ` — variants: ${comp.variants.join(', ')}`
        : '';
      return `### Ui${comp.name}${variantsStr}\n${propsStr}`;
    });

    return {
      content: [
        {
          type: 'text',
          text: `# UI Components\n\nUsage: components are auto-imported with the \`Ui\` prefix when using the Nuxt module (\`${PKG_NAME}/nuxt\`).\n\n${lines.join('\n\n')}`,
        },
      ],
    };
  },
);

server.registerTool(
  'get_design_tokens',
  {
    description:
      'Get the full CSS design tokens (CSS variables for light and dark mode, Tailwind base styles).',
  },
  async () => ({
    content: [
      { type: 'text', text: designTokens || 'Design tokens file not found.' },
    ],
  }),
);

server.registerTool(
  'search_components',
  {
    description:
      'Search across all component source files and stories for a keyword or pattern.',
    inputSchema: {
      query: z.string().describe('Search query (case-insensitive)'),
    },
  },
  async ({ query: rawQuery }) => {
    const query = rawQuery.toLowerCase();

    const results: string[] = [];
    for (const [, comp] of components) {
      const matches: string[] = [];

      for (const [label, text] of [
        [`${comp.name}.vue`, comp.source],
        [`${comp.slug}.demo.vue`, comp.demo || ''],
      ] as const) {
        const lines = text.split('\n');
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].toLowerCase().includes(query)) {
            const start = Math.max(0, i - 1);
            const end = Math.min(lines.length, i + 2);
            matches.push(
              `**${label}:${i + 1}**\n${lines.slice(start, end).join('\n')}`,
            );
          }
        }
      }

      if (matches.length > 0) {
        results.push(
          `## Ui${comp.name}\n\n${matches.slice(0, 5).join('\n\n')}`,
        );
      }
    }

    if (results.length === 0) {
      return {
        content: [{ type: 'text', text: `No results found for "${query}".` }],
      };
    }

    return {
      content: [{ type: 'text', text: results.join('\n\n---\n\n') }],
    };
  },
);

server.registerTool(
  'get_usage_example',
  {
    description:
      'Get a ready-to-use code example for a component, from its showcase demo file.',
    inputSchema: {
      component: z.string().describe('Component name (e.g. "button", "card")'),
    },
  },
  async ({ component }) => {
    const slug = component.toLowerCase();
    const comp = components.get(slug);
    if (!comp) {
      const available = Array.from(components.keys());
      return {
        content: [
          {
            type: 'text',
            text: `Component "${slug}" not found. Available: ${available.join(', ')}`,
          },
        ],
      };
    }

    if (!comp.demo) {
      return {
        content: [
          {
            type: 'text',
            text: `No demo found for Ui${comp.name}. Basic usage:\n\n\`\`\`vue\n<template>\n  <Ui${comp.name} />\n</template>\n\`\`\``,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: 'text',
          text: `# Ui${comp.name} — Demo\n\n\`\`\`vue\n${comp.demo}\n\`\`\``,
        },
      ],
    };
  },
);

// --- Start ---

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
