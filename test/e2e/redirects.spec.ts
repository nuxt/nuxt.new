import { test, expect } from '@playwright/test'
import { joinURL } from 'ufo'

const baseURL = process.env.BASE_URL || 'https://nuxt.new/'

const url = (path: string) => joinURL(baseURL, path)

const redirects = {
  '/': 'https://nuxt.com/templates',
  '/s/v4': 'https://stackblitz.com/github/nuxt/starter/tree/v4/',
  '/c/v4': 'https://codesandbox.io/s/github/nuxt/starter/tree/v4/',
}

test.describe('redirects', () => {
  for (const [path, location] of Object.entries(redirects)) {
    test(`redirects ${path}`, async ({ request }) => {
      const response = await request.get(url(path), { maxRedirects: 0 })

      expect(response.status()).toBeGreaterThanOrEqual(300)
      expect(response.status()).toBeLessThan(400)
      expect(response.headers().location).toBe(location)
    })
  }
})
