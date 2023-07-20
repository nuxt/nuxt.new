export default defineNuxtConfig({
  typescript: { typeCheck: true, shim: false },
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
    '@nuxt/image',
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
  }
})
