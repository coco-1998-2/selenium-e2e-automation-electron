//"selenium-webdriver": "^4.0.0-alpha.8",
//./node_modules/.bin/chromedriver --verbose --log-path=chromedriver.log
const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

let opts = new chrome.Options();
//opts.setAcceptInsecureCerts(true);
 opts.setChromeBinaryPath("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe");
// opts.setBrowserVersion('67');
// opts.setPlatform('Windows XP');
(async function helloSelenium() {
    let driver = new Builder()
        .usingServer("http://localhost:9515")
        .forBrowser('chrome')
        .setChromeOptions(opts)
        .build();
    try {
        await driver.get('http://www.baidu.com');
    }
    finally {
        //await driver.quit();
    }
})();