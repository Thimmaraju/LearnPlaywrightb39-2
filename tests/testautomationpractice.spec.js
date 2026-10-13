import { test, expect } from '@playwright/test';


test('Verify login with Valid credentials test automation Practice site', async ({ page }) => {


   await page.goto('https://practicetestautomation.com/practice-test-login/')

   await page.locator('//input[@name="username"]').pressSequentially("student", {delay:1000})

   await page.locator('//input[@name="password"]').fill('Password123')
   await page.locator('//button[@id="submit"]').click()

})