import { defineNuxtModule, useNuxt } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'zero-js',
  },
  setup () {
    const nuxt = useNuxt()
    nuxt.hook('nitro:init', nitro => {
      nitro.hooks.hook('prerender:generate', route => {
        const contents = new TextDecoder('utf-8').decode(new Uint8Array(route.data))
          .replace(/<script[^<]+<\/script>/g, '')
          .replace(/<link[^>]+\.js">/g, '')
          // Add plausible tracking manually
          .replace(/<\/body>/, '<script defer data-domain="nuxt.new" src="https://plausible.io/js/plausible.js"></script></body>')
        route.data = new TextEncoder().encode(contents)
      })
    })
  },
})
