
const {Builder} = require('selenium-webdriver');

(async function myFunction() {
    var chromePath = "D:\\Workspace\\electronTest\\electron-quick-start\\dist\\win-unpacked\\electron-quick-start.exe";
    let service = await new chrome.ServiceBuilder(chromePath).build();
    
    chrome.setDefaultService(service);
        
    let driver = await new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    
    await driver.get('http://www.baidu.com')

})();