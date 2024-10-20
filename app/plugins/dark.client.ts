export default defineNuxtPlugin((nuxtApp) => {
  const colorMode = useColorMode()

  // Force color mode to dark (mostly for local development)
  nuxtApp.hook('app:mounted', () => {
    if (colorMode.preference !== 'dark') {
      colorMode.preference = 'dark'
    }
  })
})
