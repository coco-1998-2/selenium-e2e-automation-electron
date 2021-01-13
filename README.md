
# This project is base on electron-quick-start

For electron part, please refer to [Electron Quick Start](https://github.com/electron/electron-quick-start) readme.

# To use selenium to do the End-to-End test on electron
Refer to [Using Selenium and WebDriver](https://www.electronjs.org/docs/tutorial/using-selenium-and-webdriver)

Setting up with WebDriverJs
WebDriverJs provides a Node package for testing with web driver, we will use it as an example.

1. Start ChromeDriver
First you need to download the chromedriver binary, and run it:

```bash
 $ npm install electron-chromedriver  
 $ ./node_modules/.bin/chromedriver  

Starting ChromeDriver (v2.10.291558) on port 9515
Only local connections are allowed.
Remember the port number 9515, which will be used later
```

2. Install WebDriverJS
```bash
 $ npm install selenium-webdriver
``` 

3. Connect to ChromeDriver
The usage of selenium-webdriver with Electron is the same with upstream, except that you have to manually specify how to connect chrome driver and where to find Electron's binary:

```bash
const webdriver = require('selenium-webdriver')

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


# Express
Official website of Express(Chinese) is: (https://www.expressjs.com.cn/)

1. install express:
```bash 
npm install nodemon --save-dev
```

2. create index.js, index.html, index2.html files under express folder

3. under express folder, run:
```bash 
nodemon express-helloWorld.js
```

4. visit: http://localhost:3000,  hello world will show.
![express-helloWorld](https://github.com/coco-1998-2/selenium-e2e-automation-electron/tree/main/res/pic/express-helloWorld.png)

# webdriver-remote-chrome-baidu-demo
brower navigate to www.baidu.com, and trigger refresh, hao123link, input "cheese" and trigger baidu search.
```bash 
./node_modules/.bin/chromedriver --verbose --log-path=chromedriver.log

node "d:\Workspace\electronTest\electron-quick-start\e2e-JS\chromeDriver-electron.js"
```
![express-helloWorld](https://github.com/coco-1998-2/selenium-e2e-automation-electron/tree/main/res/pic/baidu-demo-search-cheese.png)

# webdriver-remote-electron-svg-click-demo
'This is a paragraph' is showing at the beginning, button and svg rect will be clicked, text will be changed to "Wed Jan 13 2021 10:46:37 GMT+0800 (China Standard Time) button click!svg click!"

```bash 
1. build electron exe by: npm run dist 
2. replace 'electron-quick-start.exe' path as your real path.
3. start chromedriver:
./node_modules/.bin/chromedriver --verbose --log-path=chromedriver.log
4. run webdriver-remote-electron-svg-click-demo:
node "d:\Workspace\electronTest\electron-quick-start\e2e-JS\webdriver-remote-electron-svg-click-demo.js"

```
![express-helloWorld](https://github.com/coco-1998-2/selenium-e2e-automation-electron/tree/main/res/pic/demo-webdriver-remote-electron-svg-click.png)
# test-webdriver-remote-chrome-baidu-demo
1. install mocha:  install --global mocha
2. run demo: mocha -t 20000 --harmony_async_await  "d:\Workspace\electronTest\electron-quick-start\e2e-JS\test-webdriver-remote-chrome-baidu-demo.js"
![express-helloWorld](https://github.com/coco-1998-2/selenium-e2e-automation-electron/tree/main/res/pic/Mocha-test-demo.png)