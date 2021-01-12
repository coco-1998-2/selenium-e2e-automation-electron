//"selenium-webdriver": "^4.0.0-alpha.8",
//./node_modules/.bin/chromedriver --verbose --log-path=chromedriver.log
const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

// async/await do not work well when the promise manager is enabled.
// See https://github.com/SeleniumHQ/selenium/issues/3037
//
// 3037 does not impact these specific examples, but it is still recommended
// that you disable the promise manager when using async/await.
promise.USE_PROMISE_MANAGER = false;


let opts = new chrome.Options();
// opts.setAcceptInsecureCerts(true);
// opts.setChromeBinaryPath("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe");
 opts.setChromeBinaryPath("D:\\Workspace\\electronTest\\electron-quick-start\\dist\\win-unpacked\\electron-quick-start.exe");
// opts.setBrowserVersion('67');
// opts.setPlatform('Windows XP');
(async function helloSelenium() {
    let driver = new Builder()
        .usingServer("http://localhost:9515")    // remote WebDriver server
        .forBrowser('chrome')
        .setChromeOptions(opts)
        .build();
    try {
        await driver.get('http://www.baidu.com');

        //baidu
        await driver.findElement(By.id('kw')).sendKeys('cheese');
        let loginBtn = await driver.findElement(By.id('su'));  
        console.log("loginBtn display:" + loginBtn.isDisplayed());
        await driver.actions({async: true}).mouseDown(loginBtn);

        //-- baidu begin--
        await driver.get('http://www.baidu.com/');
        //await driver.findElement(By.id('kw')).sendKeys('cheese');
        //await driver.actions({async: true}).mouseDown(loginBtn).perform();

        const actions = driver.actions({async: true});
        let freshBtn = await driver.findElement(By.id('hotsearch-refresh-btn'));
        //await actions.click(freshBtn).perform(); //ok
        await actions.mouseMove(freshBtn).mouseDown().perform(); //ok
        console.log("freshBtn");

        let hao123link = await driver.findElement(By.linkText("hao123"));
        //await actions.click(hao123link).perform();  //ok
        await actions.mouseMove(hao123link).mouseDown().perform();   //ok
        console.log("hao123link");

        let loginBtn = await driver.findElement(By.name('tj_login'));
        await actions.click(loginBtn).perform(); //ok
        await actions.mouseMove(loginBtn).mouseDown().perform();
        console.log("loginBtn end");
        //-- baidu end-- 
    }
    finally {
        //await driver.quit();
    }
})();