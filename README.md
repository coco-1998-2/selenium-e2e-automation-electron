
# This project is base on electron-quick-start

For electron part, please refer to [Electron Quick Start](https://github.com/electron/electron-quick-start) readme.

# To use selenium to do the End-to-End test on electron, here's the [Using Selenium and WebDriver](https://www.electronjs.org/docs/tutorial/using-selenium-and-webdriver)

Setting up with WebDriverJs
WebDriverJs provides a Node package for testing with web driver, we will use it as an example.

1. Start ChromeDriver
First you need to download the chromedriver binary, and run it:

$ npm install electron-chromedriver
$ ./node_modules/.bin/chromedriver
Starting ChromeDriver (v2.10.291558) on port 9515
Only local connections are allowed.
Remember the port number 9515, which will be used later

2. Install WebDriverJS
$ npm install selenium-webdriver
3. Connect to ChromeDriver

# Folder Structure
1. e2e-Python is using python 
2. e2e-JS is using JavaScript 
3. express folder is a simple test html page using express
