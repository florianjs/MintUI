import { defineNuxtModule, createResolver, addComponentsDir } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'mintui',
    configKey: 'mintui',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // Auto-register all Ui components
    addComponentsDir({
      path: resolve('../app/components/Ui'),
      prefix: 'Ui',
    });

    // Add pre-compiled CSS (design tokens + utilities)
    nuxt.options.css.push(resolve('./style.css'));
  },
});
