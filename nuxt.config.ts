export default defineNuxtConfig({
  typescript: { strict: true, typeCheck: true, shim: false },
  nitro: {
    prerender: {
      routes: ['/', '/themes', '/data/starters.json', '/data/themes.json']
    }
  },
  modules: [
    '@nuxt/devtools',
    '@nuxthq/ui',
    // TODO: relative url support: https://github.com/GoogleChromeLabs/critters/issues/115
    // '@nuxtjs/critters',
    '@nuxt/image-edge',
    '@nuxtjs/plausible',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],
  image: {
    screens: {
      cover: 685,
      cover2x: 1370
    }
  },
  fontMetrics: {
    fonts: ['DM Sans'],
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
  }
})
