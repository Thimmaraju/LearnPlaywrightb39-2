import { test, expect } from '@playwright/test';

test('Based on browser launch different url', async ({ page, browserName }) => {


    if(browserName == "chromium"){

        await page.goto("https://www.flipkart.com/")
    }
    else if(browserName == "firefox"){

          await page.goto("https://www.meesho.com/")

    }
    else if(browserName == "webkit"){

        await page.goto("https://www.myntra.com/")
    }

    else{

       console.log("Invalid browser")
    }

})