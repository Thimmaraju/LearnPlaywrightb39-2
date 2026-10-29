import { test, expect } from '@playwright/test';

test('Verify login with Valid credentials', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const usernametext = await page.locator('(//p[@class="oxd-text oxd-text--p"])[1]').textContent()

    console.log(usernametext)

    const usernamearr = usernametext.split(" ")

    const username = usernamearr[usernamearr.length - 1]

    console.log(username)

    const passwordtext = await page.locator('(//p[@class="oxd-text oxd-text--p"])[2]').textContent()

    console.log(passwordtext)

    const passwordarr = passwordtext.split(" ")

    const password = passwordarr[passwordarr.length - 1]

    console.log(password)

    await page.getByRole('textbox', { name: 'Username' }).fill(username);

    await page.getByRole('textbox', { name: 'Password' }).fill(password);

    await page.getByRole('button', { name: 'Login' }).click();


})