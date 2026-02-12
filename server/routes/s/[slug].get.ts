export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const starter = await $fetch<Starter>(`/api/lookup/${slug}`)
  if (!starter) {
    return {
      statusCode: 404,
      body: 'Not found',
    }
  }
  return sendRedirect(event, `https://stackblitz.com/github/${starter.repo}/tree/${starter.branch}`, 302)
})
