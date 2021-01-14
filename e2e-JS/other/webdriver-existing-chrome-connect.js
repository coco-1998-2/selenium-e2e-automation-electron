/**
 *  Usage:
 * 
 *  ./node_modules/.bin/chromedriver --verbose --log-path=chromedriver.log
 */

const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");


let opts = new chrome.Options();
opts.setChromeBinaryPath("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe");

(async function helloSelenium() {
    let driver = new Builder()
        .usingServer("http://localhost:9515")    // remote WebDriver server
        .forBrowser('chrome')
        .setChromeOptions(opts)
        .build();
    try {
        //-- baidu begin--
        await driver.get('http://www.baidu.com');
        const actions = driver.actions({async: true});
        //-- baidu end-- 
    }
    finally {
        //await driver.quit();
    }
})();