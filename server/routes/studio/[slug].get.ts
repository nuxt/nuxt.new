export default defineEventHandler(async event => {
  const slug = getRouterParam(event, 'slug')
  const starter = await $fetch<Themes>(`/api/lookup/${slug}`)

  if (!starter) {
    return {
      statusCode: 404,
      body: 'Not found'
    }
  }
  return sendRedirect(event, `https://nuxt.studio/themes/${starter.slug || ''}`, 302)
})
