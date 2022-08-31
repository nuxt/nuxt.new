import { test, expect } from '@playwright/test'
import { joinURL } from 'ufo'

const baseURL = process.env.BASE_URL || 'https://nuxt.new/'

const url = (path: string) => joinURL(baseURL, path)

const pages = [
  '/',
]

test.describe(`pages`, () => {
  for (const path of pages) {
    test(`renders ${path}`, async ({ page }) => {
      const pageErrors: Error[] = []
      const consoleLogs: { type: string, text: string }[] = []

      page.on('console', (message) => {
        consoleLogs.push({
          type: message.type(),
          text: message.text()
        })
      })
      page.on('pageerror', (err) => {
        pageErrors.push(err)
      })

      await page.goto(url(path), { waitUntil: 'networkidle' })

      const title = page.locator('title')
      expect(await title.textContent()).toContain('Start a new Nuxt project')

      await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.05 })

      const consoleLogErrors = consoleLogs.filter(i => i.type === 'error')
      const consoleLogWarnings = consoleLogs.filter(i => i.type === 'warning')

      expect(pageErrors).toEqual([])
      expect(consoleLogErrors).toEqual([])
      expect(consoleLogWarnings).toEqual([])
    })
  }
})