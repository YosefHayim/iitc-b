import pytest
from selenium import webdriver
from pages.login_page import LoginPage
from pages.dashboard_page import DashboardPage
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@pytest.fixture
def driver():
  driver = webdriver.Chrome()
  yield driver
  driver.quit()

def test_dashboard(driver):
  login_page = LoginPage(driver)
  login_page.access_page()
  login_page.enter_username('testuser')
  login_page.enter_password('password123')
  login_page.submit_login()

  dashboard_page = DashboardPage(driver)
  dashboard_page.check_title(driver.title,'Dashboard')
  dashboard_page.check_url(driver.url,'http://127.0.0.1:5500/client/dashboard.html')