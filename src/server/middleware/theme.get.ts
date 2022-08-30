export default defineLazyEventHandler(async () => {
  const themes = new Set(['docus', 'alpine', /* 'elements' */])

  return (event) => {
    const slug = event.req.url.slice(1)
    if (themes.has(slug)) {
      return sendRedirect(event, `https://${slug}.nuxt.dev/?studio`, 302)
    }
  }
})
