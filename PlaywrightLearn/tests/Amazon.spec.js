
const { test, expect } = require('@playwright/test');

test('@Web Client Amazon login', async ({ page }) => {


    await page.goto("https://www.amazon.in");

    await page.locator("//a[contains(text(),'Today')]").click();
   // await page.waitForLoadState('networkidle');

    

  const titles = await page.locator("//a[@aria-label='Amazon.in']").allTextContents();
   console.log(titles); 


})