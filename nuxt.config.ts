export default defineNuxtConfig({
  extends: process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro',

  typescript: { typeCheck: true, shim: false, strict: false },

  nitro: {
    prerender: {
      routes: ['/', '/themes', '/data/starters.json', '/data/themes.json']
    }
  },

  modules: [
    '@nuxt/devtools',
    // TODO: relative url support: https://github.com/GoogleChromeLabs/critters/issues/115
    // '@nuxtjs/critters',
    '@nuxt/ui',
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
