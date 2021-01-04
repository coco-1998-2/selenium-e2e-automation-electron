const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

let opts = new chrome.Options();
opts.setChromeBinaryPath("D:\\Workspace\\electronTest\\electron-quick-start\\dist\\win-unpacked\\electron-quick-start.exe");

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