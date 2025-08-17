import test, { Browser, firefox, Locator, Page } from "@playwright/test";


test('Google page test', async () => {
    const browser: Browser = await firefox.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://www.google.com/')

    //TODO:  Need to work on locators
    //const inputTextBox : Locator = await page.locator('xpath=/html/body/div[2]/div[4]/form/div[1]/div[1]/div[1]/div[1]/div[2]/textarea')
    const inputTextBox : Locator = await page.locator('xpath=/input[@title="Search"]');
    //const searchButton : Locator = await page.locator('xpath=/html/body/div[2]/div[4]/form/div[1]/div[1]/div[3]/center/input[1]')

    inputTextBox.fill("Shiva Kumar Satakuri LinkiedIn");
    inputTextBox.press('Enter');
    //searchButton.click();

    await page.waitForTimeout(10000)
    page.close();
    browser.close();
})