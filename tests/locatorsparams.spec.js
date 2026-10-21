import { test, expect } from '@playwright/test';

import vegitablenames from "../testdata/vegitables.json"
test('Verify add to cart', async ({ page }) => {



    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    await page.locator("(//button[text()='ADD TO CART'])[1]").click() // it will always click on frist add to cart button 
 
    await expect(page.locator("//button[text()='ADD TO CART'])")).toHaveCount(30) // to verify count 
    await page.locator(`//h4[text()='${vegitablenames.veg1}']/../div[3]/button`).click()

    await expect(page.locator(`(//img[@src="./images/broccoli.jpg"])[2]`)).toBeVisible()

})