import { test, expect } from '@playwright/test'

test.describe('Landing Page', () => {
  test('should load landing page with hero text', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Lyra')).toBeVisible()
  })

  test('should have animated typing header', async ({ page }) => {
    await page.goto('/')
    const hero = page.locator('h1')
    await expect(hero).toBeVisible()
  })

  test('should navigate to login page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Log in')
    await expect(page).toHaveURL('/login')
  })

  test('should navigate to signup page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Sign up >> nth=0')
    await expect(page).toHaveURL('/signup')
  })

  test('should display features section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Mood Tracking')).toBeVisible()
    await expect(page.locator('text=AI Chat')).toBeVisible()
  })

  test('should display FAQ accordion', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Frequently Asked Questions')).toBeVisible()
  })
})