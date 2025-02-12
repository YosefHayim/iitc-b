from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

class DashboardPage():
    def __init__(self  ,driver):
        self.driver = driver
        self.wait = WebDriverWait(driver,10)
        self.submit_btn = (By.TAG_NAME,'button')

    def check_title(self,driver,title):
        return driver.title == title

    def check_url(self,driver,current_url):
        return driver.url == current_url
