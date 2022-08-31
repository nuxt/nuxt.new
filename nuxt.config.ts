import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  srcDir: 'src',
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
      name: 'Start a new Nuxt project',
      description: 'The best way to get started with a new Nuxt project.',
      ogHost: 'https://nuxt.new',
      ogImage: {
        path: '/social-preview.png',
        width: 1280,
        height: 640
      }
    },
    manifest: { enabled: false },
    workbox: { enabled: false }
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
