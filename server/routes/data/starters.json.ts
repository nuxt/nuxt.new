export default defineEventHandler(async (): Promise<Starter[]> => {
  const { tree } = await $fetch<{ tree: Array<{ path: string, type: string }> }>(
    'https://api.github.com/repos/nuxt/starter/git/trees/templates?recursive=1',
  )

  const files = tree.filter(entry =>
    entry.type === 'blob' && entry.path.startsWith('templates/') && entry.path.endsWith('.json'),
  )

  const templates = await Promise.all(files.map(file =>
    $fetch<Starter>(`https://raw.githubusercontent.com/nuxt/starter/templates/${file.path}`, {
      responseType: 'json',
    }),
  ))

  return templates
    .filter(template => !template.deprecated)
    .sort((a, b) => Number(b.default ?? false) - Number(a.default ?? false))
})
