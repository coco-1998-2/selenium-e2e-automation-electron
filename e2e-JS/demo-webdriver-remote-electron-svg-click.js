/**
 *  Usage:
 * 
 *  ./node_modules/.bin/chromedriver --verbose --log-path=chromedriver.log
 * 
 */

'use strict';

const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const { Builder, By, promise, Key, logging, until, Actions, Input } = require("selenium-webdriver");
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
        //await driver.get('http://localhost:3000/');
        const actions = driver.actions({async: true});

        // btn
        let loginBtn = await driver.findElement(By.id('set_button1'));  
        console.log(loginBtn.isDisplayed().then( (val) => console.log("loginBtn display:",val)));
        await driver.wait(until.elementLocated(By.id('set_button1')), 1000);
        //await actions.click(loginBtn).perform();
        //await actions.mouseMove(loginBtn).click().perform(); 


        // svg rect
        let rect = await driver.findElement(By.xpath('//*[name()="svg"]//*[name()="rect" and @id="set_button0"]'));  
        console.log(rect.isDisplayed().then( (val) => console.log("rect display:",val)));
        await driver.wait(until.elementLocated(By.xpath('//*[name()="svg"]//*[name()="rect" and @id="set_button0"]')), 1000);
        //await actions.click(rect).perform();
        //await actions.mouseMove(rect).click().perform(); 

        (await driver).sleep(10000);
        await actions.click(loginBtn).perform();
        await actions.click(rect).perform();
    }
    finally {
        //await driver.quit();
    }
})();