from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time

service = Service(executable_path="./chromedriver.exe")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)
driver.get("https://www.google.com")

time.sleep(10000)