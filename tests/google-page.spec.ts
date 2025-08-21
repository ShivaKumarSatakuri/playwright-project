import test, { Browser, firefox, Locator, Page } from "@playwright/test";


test('Google page test', async () => {
    const browser: Browser = await firefox.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://www.google.com/')


    const inputTextBox : Locator = await page.locator('//textarea[@name="q"]')
    inputTextBox.fill('Shiva Kumar Satakuri LinkiedIn');
    inputTextBox.press('Enter');
    //searchButton.click();

    await page.waitForTimeout(20000)
    page.close();
    browser.close();
})