import type { Preview } from '@storybook/vue3';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../app/assets/css/tailwind.css';

const preview: Preview = {
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (src: string) => {
          // Storybook uses Vue's __name (filename stem) for autodocs source generation.
          // This transform adds the Ui prefix to all PascalCase component tags.
          return src.replace(/<(\/?)((?!Ui)[A-Z][a-zA-Z]*)/g, '<$1Ui$2');
        },
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
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
