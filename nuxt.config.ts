export default defineNuxtConfig({
  typescript: { typeCheck: true, shim: false },
  nitro: {
    prerender: {
      routes: ['/', '/data/starters.json']
    }
  },
  routeRules: {
    '/themes': { redirect: 'https://nuxt.com/templates' },
    '/templates': { redirect: 'https://nuxt.com/templates' }
  },
  vite: {
    $client: {
      build: {
        rollupOptions: {
          output: {
            entryFileNames: '_nuxt/[name].[hash].js',
            chunkFileNames: '_nuxt/[name].[hash].js',
          }
        }
      }
    }
  },
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
  image: {
    screens: {
      sm: 640,
      lg: 1024
    }
  },
  fonts: {
    defaults: {
      weights: [200, 300, 700],
    }
  },
  colorMode: {
    preference: 'dark',
  },
  compatibilityDate: '2024-10-20',
})
