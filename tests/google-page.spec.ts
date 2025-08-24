import test, { Browser, firefox, Locator, Page } from "@playwright/test";


test('Google page test', async () => {
    const browser: Browser = await firefox.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://www.google.com/')


    const inputTextBox : Locator = await page.locator('//textarea[@name="q"]')
    inputTextBox.fill('Shiva Kumar Satakuri LinkiedIn');
    inputTextBox.press('Enter');

    await page.waitForTimeout(20000)

    page.locator('xpath=/html/body/div[3]/div/div[12]/div/div[2]/div[2]/div/div/div[1]/div/div/div/div[1]/div/div/span/a/h3').click

    page.close();
    browser.close();
})