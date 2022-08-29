import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  srcDir: 'src',
  nitro: {
    output: {
      publicDir: fileURLToPath(new URL('./dist', import.meta.url))
    },
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
  ],
  plausible: {
    domain: 'nuxt.new'
  },
})
