import { test, expect } from '@playwright/test';

test('Based on browser launch different url', async ({ page, browserName }) => {



    switch (browserName) {
        case "chromium": {
            await page.goto("https://www.flipkart.com/")
        }

            break;

        case "firefox": {
            await page.goto("https://www.meesho.com/")
        }

            break;

        case "webkit": {
            await page.goto("https://www.myntra.com/")
        }

            break;

    }


})


test('Based on veg name add to cart', async ({ page }) => {




    switch ("Raju") {
        case "Brocolli": {
            await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/")
            await page.locator("//h4[text()='Brocolli - 1 Kg']/../div[3]/button").click()
        }

            break;

        case "Brinjal": {
             await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/")
            await page.locator("//h4[text()='Brinjal - 1 Kg']/../div[3]/button").click()
        }

            break;

        case "Musk Melon": {
           
              await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/")
            await page.locator("//h4[text()='Musk Melon - 1 Kg']/../div[3]/button").click()
        }

            break;

        default:{

            console.log("No Vegitable names matched")
        }
                 break;
    }


})