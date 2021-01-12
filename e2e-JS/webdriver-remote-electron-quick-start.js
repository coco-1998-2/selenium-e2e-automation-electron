//./node_modules/.bin/chromedriver --verbose --log-path=chromedriver.log
// cd express; nodemon express-helloWorld.js
'use strict';

const assert = require('assert');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const { Builder, By, promise, Key, logging, until, Actions, Input } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

// async/await do not work well when the promise manager is enabled.
// See https://github.com/SeleniumHQ/selenium/issues/3037
//
// 3037 does not impact these specific examples, but it is still recommended
// that you disable the promise manager when using async/await.
promise.USE_PROMISE_MANAGER = false;

function onClick(){
    //alert(1)
    //await driver.get('http://www.baidu.com');
    console.log('onClick');
    loginBtn.click();
}


let opts = new chrome.Options();
opts.setChromeBinaryPath("D:\\Workspace\\electronTest\\electron-quick-start\\dist\\win-unpacked\\electron-quick-start.exe");
//opts.setChromeBinaryPath("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe");
//opts.addArguments("debuggerAddress", "127.0.0.1:9200");

(async function helloSelenium() {
    let driver = new Builder()
        .usingServer("http://localhost:9515")
        .forBrowser('chrome')
        .setChromeOptions(opts)
        .build();
    //driver.manage().window().setSize(600, 400);

    try {
        //await driver.executeScript('document.getElementById("kw").value=“value”');

        // svg
        //let searchBtn = driver.findElement(By.xpath('//*[name()="svg"]//*[name()="g" and @id="set_button0"]'));  
        //let rect = driver.findElement(By.xpath('//*[name()="svg"]//*[name()="rect" and @id="set_button0"]'));  
        
        //----------------------------------------------------------
        // baidu --begin--
        // await driver.get('http://www.baidu.com/');
        // //await driver.findElement(By.id('kw')).sendKeys('cheese');
        // //await driver.actions({async: true}).mouseDown(loginBtn).perform();

        // const actions = driver.actions({async: true});
        // let freshBtn = await driver.findElement(By.id('hotsearch-refresh-btn'));
        // //await actions.click(freshBtn).perform(); //ok
        // await actions.mouseMove(freshBtn).mouseDown().perform(); //ok
        // console.log("freshBtn");

        // let hao123link = await driver.findElement(By.linkText("hao123"));
        // //await actions.click(hao123link).perform();  //ok
        // await actions.mouseMove(hao123link).mouseDown().perform();   //ok
        // console.log("hao123link");

        // let loginBtn = await driver.findElement(By.name('tj_login'));
        // await actions.click(loginBtn).perform(); //ok
        // await actions.mouseMove(loginBtn).mouseDown().perform();
        // console.log("loginBtn end");
        // baidu --end-- 
        //----------------------------------------------------------


        //await driver.get('http://localhost:3000/');
        const actions = driver.actions({async: true});

        // btn
        // let loginBtn = await driver.findElement(By.id('set_button1'));  
        // console.log(loginBtn.isDisplayed().then( (val) => console.log("loginBtn display:",val)));
        // (await driver).sleep(10000);
        // //await actions.click(loginBtn).perform();
        // await actions.mouseMove(loginBtn).click().perform(); //OK


        // svg rect
        let rect = await driver.findElement(By.xpath('//*[name()="svg"]//*[name()="rect" and @id="set_button0"]'));  
        console.log(rect.isDisplayed().then( (val) => console.log("rect display:",val)));
        //(await driver).sleep(5000);
        await driver.wait(until.elementLocated(By.xpath('//*[name()="svg"]//*[name()="rect" and @id="set_button0"]')), 1000);
        //await actions.click(rect).perform();
        await actions.mouseMove(rect).click().perform(); //OK
    }
    finally {
        //await driver.quit();
    }
})();