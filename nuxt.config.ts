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
  modules: [
    '@nuxt/devtools',
    '@nuxt/ui',
    // TODO: relative url support: https://github.com/GoogleChromeLabs/critters/issues/115
    // '@nuxtjs/critters',
    '@nuxt/image',
    '@nuxtjs/plausible',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],
  image: {
    screens: {
      sm: 640,
      lg: 1024
    }
  },
  fontMetrics: {
    inline: false,
    fonts: [
      {
        family: 'DM Sans',
        fallbacks: ['Arial']
      }
    ],
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [200, 300, 700],
    },
  },
  ui: {
    icons: ['simple-icons', 'ph'],
  },
  colorMode: {
    preference: 'dark',
  },
})
