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

        // refresh
        let freshBtn = await driver.findElement(By.id('hotsearch-refresh-btn'));
        await actions.click(freshBtn).perform();   //trigger click way 1：click
        //await actions.mouseMove(freshBtn).mouseDown().perform(); //trigger click way 2：
        (await driver).sleep(5000);
        console.log("freshBtn");


        // click on hao123 link in baidu home page, open new tab
        let hao123link = await driver.findElement(By.linkText("hao123"));
        await actions.click(hao123link).perform();    
        //await actions.mouseMove(hao123link).mouseDown().perform();   
        (await driver).sleep(5000);
        console.log("hao123link");

        // input cheese and trigger search.
        await driver.findElement(By.id('kw')).sendKeys('cheese');
        let searchBtn = await driver.findElement(By.id('su'));  
        await driver.actions({async: true}).mouseDown(searchBtn).perform();
        //-- baidu end-- 
    }
    finally {
        //await driver.quit();
    }
})();