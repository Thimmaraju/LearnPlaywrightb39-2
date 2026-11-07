
import { test, expect } from '@playwright/test';


for (let i = 1; i <= 10; i++) {


    test(`Verify login with Valid credentials -${i} `, async ({ page }) => {

        // actions 

        //Launch the Url
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        //Enter username 
        await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);

        //Enter Password 
        await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);

        //click on login 
        await page.getByRole('button', { name: 'Login' }).click();

        // assertions 
        await expect(page.getByText('Time at Work')).toBeVisible();  // 5sec 
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });

}
