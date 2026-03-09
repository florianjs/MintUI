import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [vue()],
  publicDir: false,
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        nuxt: resolve(__dirname, 'src/nuxt.ts'),
        'mcp-server': resolve(__dirname, 'src/mcp-server.ts'),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.mjs`,
    },
    rollupOptions: {
      external: [
        'vue',
        '@nuxt/kit',
        '@modelcontextprotocol/sdk',
        /^@modelcontextprotocol\/sdk/,
        /^node:/,
      ],
      output: {
        assetFileNames: 'style.[ext]',
        banner: (chunk) =>
          chunk.fileName === 'mcp-server.mjs' ? '#!/usr/bin/env node\n' : '',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false,
  },
});
