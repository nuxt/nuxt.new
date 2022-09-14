export default defineEventHandler(async event => {
  const slug = getRouterParam(event, 'slug')
  const starter = await $fetch(`/api/lookup/${slug}`)
  if (!starter) {
    return {
      statusCode: 404,
      body: 'Not found'
    }
  }
  return sendRedirect(event, `https://codesandbox.io/p/github/${starter.repo}/${starter.branch}${starter.dir ? `/${starter.dir}` : ''}`, 302)
})
