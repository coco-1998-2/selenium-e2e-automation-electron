#coding=utf-8
#./node_modules/.bin/chromedriver --verbose --log-path=chromedriver.log
# electron .  --remote-debugging-port=9200  --nokiosk   --http

from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_experimental_option("debuggerAddress", "127.0.0.1:9200")
chrome_driver = "D:\Workspace\electronTest\electron-quick-start\node_modules\.bin\chromedriver.exe" # 指定自己的chromedriver路径
driver = webdriver.Chrome(chrome_driver, chrome_options=chrome_options)
print(driver.title)
