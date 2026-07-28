import { defineNuxtModule, addVitePlugin } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'purge-comments',
  },
  setup() {
    addVitePlugin({
      name: 'purge-comments',
      enforce: 'pre',
      transform: (code, id) => {
        if (!id.endsWith('.vue') && !id.endsWith('.vue?macro=true')) return
        let result = code
        let prev: string
        do {
          prev = result
          result = result.replace(/<!--(?:.*?)-->/sg, '')
        } while (result !== prev)
        return result
      },
    })
  },
})
