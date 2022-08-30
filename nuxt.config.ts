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
    '~/modules/purge-comments',
    '~/modules/zero-js',
  ],
  plausible: {
    domain: 'nuxt.new'
  },
})
