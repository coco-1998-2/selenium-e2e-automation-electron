const webdriverio = require('webdriverio')

const options = {
  host: 'localhost', // Use localhost as chrome driver server
  port: 9515, // "9515" is the port opened by chrome driver.
  desiredCapabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
     binary: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', 
     //binary: 'D:\\Workspace\\electronTest\\electron-quick-start\\dist\\electron-quick-start.exe', // Path to your Electron binary.
      args: [/* cli arguments */] // Optional, perhaps 'app=' + /path/to/your/app/
    }
  }
}

const client = webdriverio.remote(options)

client.init()
  .url('http://baidu.com')
  .setValue('#q', 'webdriverio')
  .click('#btnG')
  .getTitle().then((title) => {
    console.log('Title was: ' + title)
  })
  .end()
