import { test, expect } from '@playwright/test';

test('click on gallery if it visible', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/disappearing_elements')

    if(await page.locator('//a[@href="/gallery/"]').isVisible()){

        await page.locator('//a[@href="/gallery/"]').click()
    }
    else{

        await page.locator('//a[@href="/portfolio/"]').click()
    }

})