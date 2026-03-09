# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**`@florianjs/mintui`** — A compact UI component library for Nuxt 4 + TailwindCSS with light/dark mode support. It ships as three artifacts:
- `dist/index.mjs` — Tree-shakeable ES component library
- `dist/nuxt.mjs` — Nuxt module that auto-registers all `Ui*` components with the `Ui` prefix
- `dist/mcp-server.mjs` — MCP server exposing components, stories, and design tokens as tools/resources for AI assistants

## Commands

```bash
# Development (Nuxt app with Storybook stories as the dev environment)
npm run dev           # Nuxt dev server
npm run storybook     # Storybook at port 6006

# Build
npm run build:lib     # Build library → dist/ (uses vite.config.lib.ts)
npm run build         # Nuxt SSR build

# Testing
npm run test          # Run all Vitest tests (jsdom + Storybook browser tests via Playwright/Chromium)
npm run test:coverage # Run with v8 coverage

# Run a single test file
npx vitest run app/components/Ui/NavBar.test.ts
```

## Architecture

### Component structure

All UI components live in `app/components/Ui/`. Each component follows this pattern:
- **`ComponentName.vue`** — The component itself, using `<script setup lang="ts">` with typed `Props` interface, `withDefaults`, `computed` class strings (no class libraries), and `defineOptions({ name: 'UiComponentName' })`.
- **`ComponentName.stories.ts`** — Storybook stories using `Meta`/`StoryObj` from `@storybook/vue3`, tagged `autodocs`.
- **`ComponentName.test.ts`** — Vitest unit tests using `@vue/test-utils` `mount`.

### Styling conventions

Components compute Tailwind class strings in a `computed` property using plain string concatenation (no `clsx`/`cn`). Design tokens are CSS custom properties defined in `app/assets/css/tailwind.css` (e.g. `--primary`, `--background`, `--foreground`, etc.) and consumed via Tailwind's `hsl(var(...))` pattern.

Dark mode is toggled by adding the `dark` class to an ancestor element (class-based strategy).

### Library entry points (`src/`)

- `src/index.ts` — Re-exports all `Ui*` components; also imports `tailwind.css` so consumers get styles.
- `src/nuxt.ts` — Nuxt module that calls `addComponentsDir` pointing at `app/components/Ui` with prefix `Ui`.
- `src/mcp-server.ts` — MCP server (stdio transport). Reads component `.vue` and `.stories.ts` files at runtime from the installed package's `app/components/Ui` directory to serve tools: `list_components`, `get_component`, `get_usage_example`, `search_components`, `get_design_tokens`.

### Build

`vite.config.lib.ts` builds three entry points (`index`, `nuxt`, `mcp-server`) as ES modules into `dist/`. Vue and `@nuxt/kit` are externalized. CSS is not split — all styles end up in `dist/style.css`.

### Testing setup

Vitest is configured with two projects in `vitest.config.ts`:
1. **Default** — jsdom environment for `*.test.ts` files under `app/`.
2. **Storybook** — Browser (Playwright Chromium, headless) project that runs stories as tests via `@storybook/addon-vitest`.

### Storybook

`.storybook/preview.ts` includes a `docs.source.transform` that rewrites component tag names in autodoc source snippets to add the `Ui` prefix (e.g. `<Button>` → `<UiButton>`), compensating for Vue's internal `__name` being the filename stem.

### Exporting new components

When adding a new component `Foo`:
1. Create `app/components/Ui/Foo.vue` with `defineOptions({ name: 'UiFoo' })`.
2. Add `export { default as UiFoo } from '../app/components/Ui/Foo.vue'` to `src/index.ts`.
3. Create `app/components/Ui/Foo.stories.ts`.
4. Create `app/components/Ui/Foo.test.ts`.

## Troubleshooting

**Before investigating any issue, check `docs/troubleshooting/` first** — past problems and their root causes are documented there.

### Documenting new issues

After solving a non-trivial problem, create a file in `docs/troubleshooting/` using a kebab-case name describing the symptom (e.g. `vitest-duplicate-vue-plugin-storybook.md`).

Follow the template and conventions defined in **`AGENTS.md` section 15** (the authoritative reference for format, required fields, and examples). Every document must include:

- **Preamble:** date (`YYYY-MM-DD`), files affected, git commit reference (`git log --oneline -1`)
- **User story:** as a / I want to / so that
- **Problem description:** error output, steps to reproduce
- **Root cause:** why it happened
- **Solution:** what changed and why it works (with code examples)
- **Prevention:** how to avoid it in the future
