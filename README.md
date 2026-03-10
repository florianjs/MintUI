# 🌿 MintUI

Made with this awesome [$10 Coding AI + OpenCode](https://z.ai/subscribe?ic=SVEALL4DWW) 🚀

Stop burning tokens. Build faster.

MintUI isn’t just another UI kit. It’s a productivity framework for Nuxt 4 + TailwindCSS, engineered to be as light on your codebase as it is on your LLM budget.

## Why MintUI?

- Token-Efficient: Building frontends from scratch drains your AI credits. MintUI provides a rock-solid foundation that your AI (Copilot, Claude, Cursor) understands instantly through its built-in MCP server.

- The "White-Label" Starter: Use it out of the box, or gut it to launch your own NPM library in minutes—with a built-in component showcase and OIDC publishing already wired up.

- Opinionated UX: My personal component set. Compact, modern, and zero-fluff. Built for devs who want to ship, not fiddle with CSS variables all day.

> Less is more — focused on UX.

## Installation

```bash
npm install mintui
```

Add the module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['mintui/nuxt'],
});
```

Components are auto-imported with the `Ui` prefix. CSS is injected automatically.

```vue
<template>
  <UiButton variant="outline">Click me</UiButton>
  <UiBadge variant="secondary">New</UiBadge>
</template>
```

## Dark Mode

The library uses the `class` strategy. Add the `dark` class to your `<html>` or a parent element:

```html
<html class="dark"></html>
```

All components automatically adapt to light and dark themes via CSS variables.

## Development

```bash
# Install dependencies
npm install

# Start the showcase (Nuxt dev server)
npm run dev

# Build component library
npm run build:lib

# Generate static showcase
npm run generate
```

## Publishing to npm

### First publish (step by step)

1. **Set your package name** in `package.json` (`"name": "mintui"` or `"@your-org/ui"`)

2. **Login to npm**

   ```bash
   npm login
   ```

3. **Build & publish manually** (first time, to create the package on npm)

   ```bash
   npm run build:lib
   npm publish --access public
   ```

4. **Set up OIDC trusted publisher** directly from npmjs.com (no tokens needed)
   - Go to [npmjs.com](https://www.npmjs.com) → your package → **Settings** → **Publishing access**
   - Under **Trusted Publisher**, select **GitHub Actions** as publisher
   - Fill in: Organization/user, Repository, Workflow filename (`release.yml`), Environment (`prod`)
   - Click **Set up connection** — npm configures the GitHub Actions OIDC trust automatically

5. **Create a GitHub Environment** named `prod`
   - GitHub repo → **Settings** → **Environments** → **New environment** → `prod`
   - No secrets needed — OIDC handles auth

6. **Publish a new version**

   ```bash
   npm version patch   # or minor / major
   git push && git push --tags
   ```

   Then on GitHub → **Releases** → **Create a new release** → select the tag → **Publish release**.
   The CI workflow builds and publishes to npm automatically.

See [docs/publishing.md](docs/publishing.md) for the full guide.

## MCP Server (AI integration)

The package includes an MCP server that gives your AI assistant (Copilot, Claude, Cursor) full access to component source code, props, variants, stories, and design tokens.

### Setup

**VS Code (Copilot)** — `.vscode/mcp.json`:

```json
{
  "servers": {
    "mintui": {
      "command": "npx",
      "args": ["mintui-mcp"]
    }
  }
}
```

**Claude Desktop** — `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "mintui": {
      "command": "npx",
      "args": ["mintui-mcp"]
    }
  }
}
```

**Cursor** — `.cursor/mcp.json`: same format as Claude Desktop.

### Available tools

| Tool                | Description                                         |
| ------------------- | --------------------------------------------------- |
| `list_components`   | All components with props & variants                |
| `get_component`     | Source code + stories + props for a given component |
| `get_usage_example` | Copy-paste usage examples for a given component     |
| `search_components` | Keyword search across source & stories              |
| `get_design_tokens` | CSS variables (light/dark)                          |

Once configured, just ask your AI: _"Use the Card component from MintUI with a title and footer"_ — it calls the MCP tools automatically.

## License

MIT
