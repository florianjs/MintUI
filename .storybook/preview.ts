import type { Preview } from '@storybook/vue3';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../app/assets/css/tailwind.css';

const preview: Preview = {
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
