export default defineEventHandler(async event => {
  const slug = getRouterParam(event, 'slug')
  const sarter = await $fetch<Starter>(`/api/lookup/${slug}`)
  if (!sarter) {
    return {
      statusCode: 404,
      body: 'Not found'
    }
  }
  return sendRedirect(event, `https://nuxt.studio/themes/${slug}`, 302)
})
