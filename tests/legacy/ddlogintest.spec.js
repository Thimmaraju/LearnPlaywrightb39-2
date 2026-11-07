import { test, expect } from '@playwright/test';

const invaliddata = {

    dataset1: { username: "jerhfyb", password: "admin123" },
    dataset2: { username: "Admin", password: "ketgnujtr" },
    dataset3: { username: "erjgfb", password: "ketgnujtr" },
}

for (let data in invaliddata) {


    test(`Verify login with invalid creds - ${data}`, async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await page.getByRole('textbox', { name: 'Username' }).fill(invaliddata[data].username);

        await page.getByRole('textbox', { name: 'Password' }).fill(invaliddata[data].password);

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.getByText('Invalid credentials')).toBeVisible();
    });


}

