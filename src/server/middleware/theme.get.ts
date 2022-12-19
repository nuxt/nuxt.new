export default defineLazyEventHandler(async () => {
  const themes = new Set(['docus', 'alpine', /* 'elements' */])

  return defineEventHandler((event) => {
    const slug = event.req.url?.slice(1)
    if (slug && themes.has(slug)) {
      return sendRedirect(event, `https://${slug}.nuxt.dev/?studio`, 302)
    }
  })
})
