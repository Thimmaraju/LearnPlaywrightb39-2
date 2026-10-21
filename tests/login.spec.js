import { test, expect } from '@playwright/test';

import logindata from "../testdata/login.json"

test('Verify login with Valid credentials', async ({ page }) => {

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


test('Verify login with valid username and invalid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.wrongpassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});


test('Verify login with invalid username and valid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.wrongusername);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});


test('Verify login with invalid username and invalid password', async ({ page }) => {

  const invalidcreds = ["gferkjbn", "uyjebgwuywf"]
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(invalidcreds[0]);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(invalidcreds[1]);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});


test('Verify login with blank fields', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Required').first()).toBeVisible();
  await expect(page.getByText('Required').nth(1)).toBeVisible();
});


test('Verify launching book my show', async ({ page }) => {

  await page.goto('https://in.bookmyshow.com/explore/home/bengaluru')

})



test('Verify login with invalid username and invalid password - dummy', async ({ page }) => {
    // actions 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()
});


