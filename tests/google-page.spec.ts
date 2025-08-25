import test, { Browser, firefox, Locator, Page } from "@playwright/test";


test('Google page test', async () => {
    //{ headless: false }
    const browser: Browser = await firefox.launch();
    const page: Page = await browser.newPage();
    await page.goto('https://www.google.com/')


    const inputTextBox : Locator = await page.locator('//textarea[@name="q"]')
    inputTextBox.fill('Shiva Kumar Satakuri LinkiedIn');
    inputTextBox.press('Enter');

    await page.waitForTimeout(10000)

    page.locator('//h3[contains(text(),"Shiva Kumar Satakuri")]').click

    console.log('executed successfully')

    page.close();
    browser.close();
})