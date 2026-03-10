// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: { compatibilityVersion: 4 },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'MintUI — Component Library',
      meta: [{ name: 'description', content: 'A compact UI component library for Nuxt 4 + TailwindCSS' }]
    }
  },
  routeRules: {
    '/preview/**': {
      headers: {
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "frame-ancestors 'self'",
      },
    },
  },
});
