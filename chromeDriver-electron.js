//https://www.electronjs.org/docs/tutorial/using-selenium-and-webdriver
//./node_modules/.bin/chromedriver --verbose --log-path=chromedriver.log

const webdriver = require('selenium-webdriver')

const driver = new webdriver.Builder()
  // The "9515" is the port opened by chrome driver.
  .usingServer('http://localhost:9515')
  .withCapabilities({
    chromeOptions: {
      // Here is the path to your Electron binary.
      binary: 'D:\\Workspace\\electronTest\\electron-quick-start\\dist\\win-unpacked\\electron-quick-start.exe'
      //binary: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', 
    }
  })
  .forBrowser('electron')
  .build()

driver.get('http://www.baidu.com')

driver.quit()
