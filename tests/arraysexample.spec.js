import { test, expect } from '@playwright/test';

test('Verify login with Valid credentials', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Time at Work')).toBeVisible();  // 5sec 
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  const menuitem = await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]/span').textContent()

  console.log(menuitem)


  const menuitems = await page.locator('//a[@class="oxd-main-menu-item"]/span').allTextContents()

  console.log(menuitems)

  await expect(menuitems.length).toBe(11)

  await expect(menuitems.includes("Recruitment")).toBe(true)


});