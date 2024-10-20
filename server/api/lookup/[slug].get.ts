export default lazyEventHandler(async () => {
  const repos = await $fetch<Starter[]>('/data/starters.json')

  return defineEventHandler((event) => {
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
