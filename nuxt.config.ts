export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@nuxt/ui',
    // TODO: relative url support: https://github.com/GoogleChromeLabs/critters/issues/115
    // '@nuxtjs/critters',
    '@nuxt/image',
    '@nuxtjs/plausible',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/eslint',
  ],
  colorMode: {
    preference: 'dark',
  },
  routeRules: {
    '/themes': { redirect: 'https://nuxt.com/templates' },
    '/templates': { redirect: 'https://nuxt.com/templates' },
  },
  compatibilityDate: '2025-07-28',
  nitro: {
    prerender: {
      routes: ['/', '/data/starters.json'],
    },
  },
  typescript: { typeCheck: 'build', shim: false },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    defaults: {
      weights: [200, 300, 700],
    },
  },
  image: {
    screens: {
      sm: 640,
      lg: 1024,
    },
  },
})
