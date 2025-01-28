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
print('finish')
time.sleep(10000)
