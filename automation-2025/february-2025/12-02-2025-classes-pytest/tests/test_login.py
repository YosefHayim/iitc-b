import pytest
from selenium import webdriver
from pages.login_page import LoginPage
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@pytest.fixture
def driver():
  driver = webdriver.Chrome()
  yield driver
  driver.quit()

def check_title(driver,title):
  return driver.title == title

def check_error(driver):
  try:
      WebDriverWait(driver,10).until(EC.presence_of_element_located((By.XPATH,'//*[@id="error-message"]')))
      return True
  except Exception as e:
    print('Error while checking error: ',e)
    return False

@pytest.mark.parametrize('credentials ,is_valid',[
  ({'username':'usertest','password':'password123'},True)
  ({'username':'usertest','password':'password123'},False)
  ({'username':'usertest','password':'password123'},False)
  ({'username':'usertest','password':'password123'},False)
  ])
def test_login(driver,credentials,is_valid):
  try:
    login_page = LoginPage(driver)
    login_page.access_page()
    login_page.enter_username(credentials['username'])
    login_page.enter_password(credentials['password'])
    login_page.submit_login()

    if is_valid:
      check_title(driver.title,'Dashboard')
    else:
      assert check_error(driver)

  except Exception as e:
    print('An exception occurred',e)