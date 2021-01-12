
# This project is base on electron-quick-start

For electron part, please refer to [Electron Quick Start](https://github.com/electron/electron-quick-start) readme.

# To use selenium to do the End-to-End test on electron,  [Using Selenium and WebDriver](https://www.electronjs.org/docs/tutorial/using-selenium-and-webdriver)

Setting up with WebDriverJs
WebDriverJs provides a Node package for testing with web driver, we will use it as an example.

1. Start ChromeDriver
First you need to download the chromedriver binary, and run it:

``` $ npm install electron-chromedriver  ```
``` $ ./node_modules/.bin/chromedriver  ```

Starting ChromeDriver (v2.10.291558) on port 9515
Only local connections are allowed.
Remember the port number 9515, which will be used later

2. Install WebDriverJS
``` $ npm install selenium-webdriver``` 
3. Connect to ChromeDriver
The usage of selenium-webdriver with Electron is the same with upstream, except that you have to manually specify how to connect chrome driver and where to find Electron's binary:

```const webdriver = require('selenium-webdriver')

const driver = new webdriver.Builder()
  // The "9515" is the port opened by chrome driver.
  .usingServer('http://localhost:9515')
  .withCapabilities({
    chromeOptions: {
      // Here is the path to your Electron binary.
      binary: '/Path-to-Your-App.app/Contents/MacOS/Electron'
    }
  })
  .forBrowser('electron')
  .build()

driver.get('http://www.google.com')
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver')
driver.findElement(webdriver.By.name('btnG')).click()
driver.wait(() => {
  return driver.getTitle().then((title) => {
    return title === 'webdriver - Google Search'
  })
}, 1000)

driver.quit()
```

# Folder Structure
1. e2e-Python is using python 
2. e2e-JS is using JavaScript 
3. express folder is a simple test html page using express
