import type { StorybookConfig } from '@storybook/vue3-vite';
import vue from '@vitejs/plugin-vue';

const config: StorybookConfig = {
  stories: [
    '../app/components/**/*.mdx',
    '../app/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
  ],
  framework: '@storybook/vue3-vite',
  viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(vue());
    return config;
  },
};
export default config;
