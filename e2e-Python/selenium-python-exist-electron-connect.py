#coding=utf-8
#./node_modules/.bin/chromedriver --verbose --log-path=chromedriver.log
# electron .  --remote-debugging-port=9200  --nokiosk   --http

from selenium import webdriver
from selenium.webdriver.chrome.options import Options


from selenium import webdriver
 
driver = webdriver.Chrome()
 
driver2 = webdriver.Remote(command_executor=executor_url, desired_capabilities={})
driver2.session_id = session_id
print(driver2.current_url)

