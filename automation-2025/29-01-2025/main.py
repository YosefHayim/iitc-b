from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time
from selenium.webdriver.common.by import By

service = Service(executable_path="./chromedriver.exe")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)
driver.get("https://atid.store/")

store_menu = driver.find_element(By.XPATH, '/html/body/div/header/div[1]/div[1]/div/div/div/div[2]/div/div/div/nav/div/ul/li[2]/a').click()
driver.implicitly_wait(2)
shoes_item = driver.find_element(By.XPATH,'/html/body/div/div[1]/div/div[2]/main/div/ul/li[2]/div[1]/a').click()
print(driver.current_url)
time.sleep(1000)