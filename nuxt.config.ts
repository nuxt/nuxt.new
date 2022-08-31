import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  srcDir: 'src',
  typescript: { strict: true, typeCheck: true, shim: false },
  nitro: {
    prerender: {
      routes: ['/data/starters.json', '/data/themes.json']
    }
  },
  image: {
    screens: {
      cover: 685,
      cover2x: 1370
    }
  },
  css: ['~/assets/fonts.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/critters',
    '@nuxt/image-edge',
    'vue-plausible',
    '@kevinmarrec/nuxt-pwa',
    '~/modules/purge-comments',
    '~/modules/zero-js',
  ],
  pwa: {
    meta: {
      name: 'Start a Nuxt project',
      description: 'The best way to get started with a new Nuxt project.',
      theme_color: '#000',
      ogHost: 'https://nuxt.new',
      ogImage: {
        path: '/social-preview.png',
        width: 1280,
        height: 640
      },
    },
    manifest: {
      name: 'Start a Nuxt project',
      background_color: '#000',
      short_name: 'nuxt.new',
      theme_color: '#000',
      description: 'The best way to get started with a new Nuxt project.',
    },
    workbox: false,
  },
  app: {
    head: {
      link: ['Light', 'Regular', 'Bold'].map(weight => ({
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        crossorigin: '',
        href: `/fonts/RoobertPRO-${weight}.woff2`,
      })),
    }
  },
  plausible: {
    domain: 'nuxt.new'
  },
})
