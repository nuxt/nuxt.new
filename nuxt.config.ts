export default defineNuxtConfig({
  typescript: { strict: true, typeCheck: true, shim: false },

  nitro: {
    prerender: {
      routes: ['/', '/themes', '/data/starters.json', '/data/themes.json']
    }
  },

  image: {
    screens: {
      cover: 685,
      cover2x: 1370
    }
  },

  modules: [
    '@nuxthq/ui',
    // TODO: relative url support: https://github.com/GoogleChromeLabs/critters/issues/115
    // '@nuxtjs/critters',
    '@nuxt/image-edge',
    '@nuxtjs/plausible',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],

  fontMetrics: {
    fonts: ['DM Sans'],
  },

  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 700],
    },
  },

  ui: {
    icons: ['simple-icons', 'ph'],
  },

  colorMode: {
    preference: 'dark',
  },

  plugins: ['~/plugins/dark.client.ts', '~/plugins/plausible.server.ts'],
})
