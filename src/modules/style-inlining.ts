import { addVitePlugin, defineNuxtModule, useNuxt } from '@nuxt/kit'
import purgehtml from 'purgecss-from-html'
import { PurgeCSS } from 'purgecss'
import { dirname, isAbsolute, join, relative } from 'pathe'

export default defineNuxtModule({
  meta: {
    name: 'style-inlining',
  },
  setup () {
    const nuxt = useNuxt()

    let css: string
    let cssFilename: string

    const inlineStyles = (html: string, css: string, filename: string) => {
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
      nitro.hooks.hook('prerender:generate', async route => {
        if (!route.fileName?.endsWith('.html') || !route.contents) return

        const [result] = await new PurgeCSS().purge({
          content: [{ raw: route.contents, extension: 'html' }],
          css: [{ raw: css }],
          extractors: [{ extensions: ['html'], extractor: purgehtml }],
        })
        route.contents = inlineStyles(route.contents, result.css, route.fileName)
      })
    })
  }
})
