import { test, expect } from '@playwright/test'


// Writing a very basic test case
test('Google homepage title', async ({ page }) => {

    //Wait until the page is loaded
    await page.goto('https://google.com')

    //Wait until the title is loaded. Then verify if title cotains the text 'Google'
    await expect(page).toHaveTitle(/Google/)
})