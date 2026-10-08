
import { test, expect } from '@playwright/test';

import details from "../testdata/demoqa.json"

test('Verify Working with Edit boxes', async ({ page }) => {

    // Actions 
    await page.goto('https://demoqa.com/text-box')
    await page.getByRole('textbox', { name: 'Full Name' }).fill(details.fullname)
    await page.getByRole('textbox', { name: 'name@example.com' }).pressSequentially(details.emailid)
    await page.getByRole('textbox', { name: 'Current Address' }).fill(details.currentaddress)
    await page.locator('#permanentAddress').fill(details.permanentaddress)
    await page.getByRole('button', { name: 'Submit' }).click()

    // Assertions 
    await expect(page.getByText(`Name:${details.fullname}`)).toBeVisible()
    await expect(page.getByText(`Email:${details.emailid}`)).toBeVisible()
    await expect(page.getByText(`Current Address :${details.currentaddress}`)).toBeVisible()
    await expect(page.getByText(`Permananet Address :${details.permanentaddress}`)).toBeVisible()


})