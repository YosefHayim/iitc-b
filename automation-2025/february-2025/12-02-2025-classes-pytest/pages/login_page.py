from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class LoginPage:
  def __init__(self  ,driver):
    self.driver = driver
    self.username_input = (By.ID,'username')
    self.password_input = (By.ID,'password')
    self.submit_btn = (By.TAG_NAME,'button')
    self.wait = WebDriverWait(driver,10)

  def enter_username(self,username):
    self.wait.until(EC.presence_of_element_located(self.username_input)).send_keys(username)

  def enter_password(self,password):
    self.wait.until(EC.presence_of_element_located(self.password_input)).send_keys(password)

  def submit_login(self):
    self.wait.until(EC.presence_of_element_located(self.submit_btn)).click()

  def access_page(self,driver):
    driver.get('http://127.0.0.1:5500/12-02-2025-classes-pytest/client/index.html')
  
  
