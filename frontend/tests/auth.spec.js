import { test, expect } from '@playwright/test'

test.describe('Authentication Flow', () => {
  test('should show validation errors on empty form submit', async ({ page }) => {
    await page.goto('/signup')
    await page.click('button:has-text("Create Account")')
    await expect(page.locator('input[type="email"]')).toHaveAttribute('required')
  })

  test('should toggle between login and signup', async ({ page }) => {
    await page.goto('/login')
    await expect(page.locator('text=Sign up')).toBeVisible()
    await page.click('text=Sign up')
    await expect(page).toHaveURL('/signup')
  })

  test('should validate password length', async ({ page }) => {
    await page.goto('/signup')
    await page.fill('input[type="email"]', 'test@example.com')
    await page.fill('input[type="password"]', '123')
    await page.fill('input[name="confirmPassword"]', '123')
    await page.click('button:has-text("Create Account")')
    await expect(page.locator('text=Password must be at least 6 characters')).toBeVisible()
  })
})