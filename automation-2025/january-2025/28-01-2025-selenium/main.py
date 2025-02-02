from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time
from selenium.webdriver.common.by import By

service = Service(executable_path="./chromedriver.exe")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)
driver.get("https://practicetestautomation.com/practice-test-login/")

username = driver.find_element(By.ID, "username").send_keys("student")
password = driver.find_element(By.ID, "password").send_keys("Password123")
submit_btn = driver.find_element(By.ID,'submit').click()
success_message = driver.find_element(By.XPATH,'/html/body/div/div/section/div/div/article/div[1]/h1')
logout_button = driver.find_element(By.XPATH,'/html/body/div/div/section/div/div/article/div[2]/div/div/div/a')
if success_message and logout_button:
  print(f'found success message',success_message)
print('test case 1')

logout_button.click()

time.sleep(10000)
driver.quit