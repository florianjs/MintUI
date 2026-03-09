# MintUI

A compact, modern UI component library for **Nuxt 4 + TailwindCSS** with light and dark mode support.

> Less is more — focused on UX.

## Components

| Component     | Variants                                                              |
| ------------- | --------------------------------------------------------------------- |
| **Button**    | default, destructive, outline, secondary, ghost, link · sm, lg, icon  |
| **Input**     | text, email, password, number, search, tel, url                       |
| **Badge**     | default, secondary, destructive, outline                              |
| **Card**      | Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter |
| **Avatar**    | sm, default, lg · image or fallback initials                          |
| **Switch**    | on/off toggle with disabled state                                     |
| **Separator** | horizontal, vertical                                                  |

## Installation

```bash
npm install mintui
```

### Nuxt (recommended)

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

### Vue (standalone)

```ts
import { UiButton, UiBadge } from 'mintui';
import 'mintui/style.css';
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

# Start Storybook
npm run storybook

# Build component library
npm run build:lib

# Build Storybook static site
npm run build-storybook
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
| `get_usage_example` | Copy-paste examples extracted from Storybook        |
| `search_components` | Keyword search across source & stories              |
| `get_design_tokens` | CSS variables (light/dark)                          |

Once configured, just ask your AI: _"Use the Card component from MintUI with a title and footer"_ — it calls the MCP tools automatically.

## License

MIT
