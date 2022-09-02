import { addVitePlugin, defineNuxtModule, useNuxt } from '@nuxt/kit'
import { dirname, isAbsolute, join, relative } from 'pathe'

export default defineNuxtModule({
  meta: {
    name: 'style-inlining',
  },
  setup () {
    const nuxt = useNuxt()

    let css: string
    let cssFilename: string

    const inlineStyles = (html: string, filename: string) => {
      const resolvedCSS = css.replace(/(?<=url\()[^)]+(?=\))/g, url => {
        if (isAbsolute(url)) return url
        return './' + relative(dirname(filename.replace(/^\/*/, '')), join(cssFilename, '..', url))
      })
      return html
        .replace(/<\/head>/g, `<style>${resolvedCSS}</style></head>`)
        .replace(/<link[^>]+\.css">/g, '')
    }

    addVitePlugin({
      name: 'entry-css',
      writeBundle (_options, bundle) {
        for (const name in bundle) {
          const asset = bundle[name]
          if (asset.type === 'asset' && asset.fileName.match(/entry.*\.css$/)) {
            cssFilename = asset.fileName
            css = asset.source.toString()
            return
          }
        }
      }
    })

    nuxt.hook('nitro:init', nitro => {
      nitro.hooks.hook('prerender:generate', route => {
        if (!route.fileName?.endsWith('.html')) return

        if ('data' in route && route.data) {
          const contents = new TextDecoder('utf-8').decode(new Uint8Array(route.data))
          route.data = new TextEncoder().encode(inlineStyles(contents, route.fileName))
        } else if (route.contents) {
          // Remove when we upgrade nitro
          route.contents = inlineStyles(route.contents, route.fileName)
        }
      })
    })
  }
})
