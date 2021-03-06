#coding=utf-8
#./node_modules/.bin/chromedriver --verbose --log-path=chromedriver.log
# electron .  --remote-debugging-port=9200  --nokiosk   --http

from selenium import webdriver
from selenium.webdriver.chrome.options import Options


chrome_options = Options()
chrome_options.add_experimental_option("debuggerAddress", "127.0.0.1:9200")


driver = webdriver.Chrome(options=chrome_options)

executor_url = driver.command_executor._url
session_id = driver.session_id
print(session_id)
print(executor_url)
driver.get('https://www.baidu.com')
# driver.find_element_by_id("set_button1").click()

driver2 = webdriver.Remote(command_executor=executor_url, desired_capabilities={})
driver2.session_id = session_id
print(driver2.current_url)
