// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: { compatibilityVersion: 4 },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  app: {
    baseURL: '/MintUI/',
    head: {
      title: 'MintUI — Component Library',
      meta: [{ name: 'description', content: 'A compact UI component library for Nuxt 4 + TailwindCSS' }]
    }
  },
  router: {
    options: {
      hashMode: true
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
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
});
