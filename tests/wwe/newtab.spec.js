const { test, expect } = require('@playwright/test');

test('How to work with New Tab / new window', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


    const [newTab] = await Promise.all([

        page.waitForEvent("popup"),

        page.click('//a[@href="https://www.youtube.com/c/OrangeHRMInc"]')
    ])

    await expect(newTab).toHaveURL('https://www.youtube.com/c/OrangeHRMInc')

    //await newTab.locator('sunscribe').click()

    await page.locator('//a[@href="https://www.linkedin.com/company/orangehrm/mycompany/"]').click()

})


test('How to work with New Tab / new window -flipkart', async ({ page }) => {


    await page.goto('https://www.flipkart.com/')

    const popvisible = await page.locator('//span[@class="b3wTlE"]').isVisible()

    if(popvisible){

        page.locator('//span[@class="b3wTlE"]').click()
    }

    await page.locator('input[name="q"]').first().fill("iphones")

    await page.keyboard.press("Enter")

    const [newTab] = await Promise.all([

        page.waitForEvent('popup'),
        page.click("//div[text()='Apple iPhone 15 (Blue, 128 GB)']")
    ])

   // await newTab.
    

})