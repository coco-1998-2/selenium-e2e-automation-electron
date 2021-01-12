#coding=utf-8
from selenium import webdriver
import time
from selenium.webdriver.common.by import By
 
driver = webdriver.Chrome()
driver.implicitly_wait(10)
driver.get("http://www.baidu.com")
 
driver.find_element_by_id("kw").send_keys("Selenium")
driver.find_element_by_id("su").click()
 
time.sleep(2)
driver.quit()