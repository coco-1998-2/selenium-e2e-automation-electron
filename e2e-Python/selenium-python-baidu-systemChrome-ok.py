#coding=utf-8
# /**
#  *  Usage:
#  *   put Chromedriver.exe in Python folder
#  *  ./node_modules/.bin/chromedriver --verbose --log-path=chromedriver.log 
#  */

from selenium import webdriver
import time
from selenium.webdriver.common.by import By
 
driver = webdriver.Chrome()
driver.implicitly_wait(10)
driver.get("http://www.baidu.com")
print(driver.getSessionId().toString() )

driver.find_element_by_id("kw").send_keys("Selenium")
driver.find_element_by_id("su").click()
 
time.sleep(20)
#driver.quit()