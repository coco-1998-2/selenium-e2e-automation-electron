
const {Builder} = require('selenium-webdriver');

// (async function myFunction() {
//     let driver = await new Builder().forBrowser('chrome').build();
//     //your code inside this block
//     //chrome.setDefaultService(new chrome.ServiceBuilder('C:\\Program Files (x86)\\Google\\Chrome\\Application').build());
//     driver.get('http://www.baidu.com')
// })();

(async function myFunction() {
    var chromePath = "D:\\Workspace\\electronTest\\electron-quick-start\\dist\\win-unpacked\\electron-quick-start.exe";
    let service = await new chrome.ServiceBuilder(chromePath).build();
    
    chrome.setDefaultService(service);
        
    let driver = await new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    
    driver.get('http://www.baidu.com')
    
})();