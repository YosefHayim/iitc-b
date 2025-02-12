import pytest
from selenium import webdriver
from pages.login_page import LoginPage
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

@pytest.fixture
def driver():
  driver = webdriver.Chrome()
  yield driver
  driver.quit()

def test_login(driver):
  try:
    login_page = LoginPage(driver)
    driver.get('http://127.0.0.1:5500/12-02-2025-classes-pytest/client/index.html')
    login_page.enter_username('baba')
    login_page.enter_password('mama')
    login_page.submit_login()
  except Exception as e:
    print('An exception occurred',e)