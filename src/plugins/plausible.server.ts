export default defineNuxtPlugin(nuxtApp => {
  useHead({
    script: [{
      body: true,
      defer: true,
      'data-domain': 'nuxt.new',
      src: 'https://plausible.io/js/plausible.js'
    }]
  })
})
