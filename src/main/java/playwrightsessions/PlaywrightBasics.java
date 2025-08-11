package playwrightsessions;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class PlaywrightBasics {

    public static void main(String... args) {

        Playwright playwright = Playwright.create();

        //For Chromium browser. Disabled headless state to view the browser
        //Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false));

        //For Chrome browser. Disabled headless state to view the browser
        BrowserType.LaunchOptions launchOptions = new BrowserType.LaunchOptions();
        launchOptions.setChannel("chrome");
        launchOptions.setHeadless(false);
        Browser browser = playwright.chromium().launch(launchOptions);

        //For Firefox browser
        //Browser browser = playwright.firefox().launch();

        //For Safari browser
        //Browser browser = playwright.webkit().launch();

        Page page = browser.newPage();
        //page.pause();     //Will pause the page
        page.navigate("https://www.google.com");

        System.out.println("Playwright started successfully");

        String title = page.title();
        System.out.println("Page title is : " + title);

        String url = page.url();
        System.out.println("Page url is : " + url);

        browser.close();
        System.out.println("Browser closed successfully");

        playwright.close();
        System.out.println("Playwright closed successfully");
    }
}