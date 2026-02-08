export default defineEventHandler(async (event) => {
  const templates: Starter[] = []

  const files = await $fetch('https://api.github.com/repos/nuxt/nuxt-starter/contents/templates')

  await Promise.all(files.map(async (file) => {
      if (!file.download_url || file.type !== 'file' || !file.name.endsWith('.json')) {
        return
      }
      const templateName = file.name.replace('.json', '')
      const template = await $fetch(file.download_url, {
        responseType: 'json',
      }) as Starter
      if (!template.deprecated) {
        templates.push({ slug: templateName, ...template, tar: `https://codeload.github.com/${template.repo}/tar.gz/refs/heads/${template.branch}` })
      }
    }))
  
  return templates.sort((a, b) => {
    if (a.default && !b.default) return -1
    if (!a.default && b.default) return 1
    return 0
  })
})
