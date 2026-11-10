import { test, expect } from '@playwright/test';
// import logindata from "../../../testdata/login.json"
// import postdata from "../../../testdata/buzz/buzzpost.json"

// test('Verify User can post a message',{tag: "@smoke"}, async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
//   await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('link', { name: 'Buzz' }).click();
//   await page.getByRole('textbox', { name: 'What\'s on your mind?' }).fill(postdata.message);

//   await page.locator('//button[@class="oxd-glass-button"]').first().click()
//   await page.locator("//input[@type='file']").setInputFiles('testdata/village.jpg')
//   await page.locator('//button[@type="submit"]').last().click()

// });


test.only("drag nad drop", async ({page}) => {

    await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop')
    
    await page.locator('#menu-fried-chicken').dragTo(page.locator('#plate-items'))
    await page.locator('#menu-hamburger').dragTo(page.locator('#plate-items'))
    await page.locator('#menu-ice-cream').dragTo(page.locator('#plate-items'))

        await page.waitForTimeout(4000)
})