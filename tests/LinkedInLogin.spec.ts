import test, { Browser, firefox, Page } from "@playwright/test";

test('LinkedIn Test', async () => {
    const browser: Browser = await firefox.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://www.linkedin.com/feed/')

    await page.waitForTimeout(10000)
    
    console.log('executed successfully')

    page.close();
    browser.close();
})