import { defineNuxtModule, useNuxt } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'zero-js',
  },
  setup () {
    const nuxt = useNuxt()
    const purgeHTML = (html: string) => html
      .replace(/<script[^<]+<\/script>/g, '')
      .replace(/<link[^>]+\.js">/g, '')
      // Add plausible tracking manually
      .replace(/<\/body>/, '<script defer data-domain="nuxt.new" src="https://plausible.io/js/plausible.js"></script></body>')

    nuxt.hook('nitro:init', nitro => {
      nitro.hooks.hook('prerender:generate', route => {
        if ('data' in route) {
          const contents = new TextDecoder('utf-8').decode(new Uint8Array(route.data))
          route.data = new TextEncoder().encode(purgeHTML(contents))
        } else {
          // Remove when we upgrade nitro
          route.contents = purgeHTML(route.contents)
        }
      })
    })
  },
})
