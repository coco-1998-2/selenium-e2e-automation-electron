const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


(async function myFunction() {
    //var chromePath = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
    var chromePath = "D:\\Workspace\\electronTest\\electron-quick-start\\dist\\win-unpacked\\electron-quick-start.exe";
    let service = await new chrome.ServiceBuilder(chromePath).build();
    
    chrome.setDefaultService(service);
        
    let driver = await new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    
    await driver.get('http://www.baidu.com')
})();

