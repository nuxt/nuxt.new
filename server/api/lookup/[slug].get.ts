export default lazyEventHandler(async () => {
  const [themes, starters] = await Promise.all([
    $fetch<Theme[]>('/data/themes.json'),
    $fetch<Starter[]>('/data/starters.json'),
  ])
  const repos = [...themes, ...starters]

  return defineEventHandler(event => {
    const slug = getRouterParam(event, 'slug')
    const repo = repos.find(r => r.slug === slug)

    if (!repo) {
      throw createError({
        statusCode: 404,
        message: 'Not Found',
      })
    }

    return repo
  })
})
