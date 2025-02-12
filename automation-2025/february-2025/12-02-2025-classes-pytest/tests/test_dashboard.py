import pytest
from selenium import webdriver
from pages.login_page import LoginPage
from pages.dashboard_page import DashboardPage
import time


@pytest.fixture
def driver():
  driver = webdriver.Chrome()
  yield driver
  driver.quit()

  def test_dashboard(driver):
    login_page = LoginPage(driver)
    time.sleep(3)
    login_page.access_page('http://127.0.0.1:5500/client/dashboard.html')
    time.sleep(3)
    login_page.enter_username('testuser')
    time.sleep(3)
    login_page.enter_password('password123')
    time.sleep(3)
    login_page.submit_login()

    dashboard_page = DashboardPage(driver)
    dashboard_page.check_title(driver.title,'Dashboard')
    dashboard_page.check_url(driver.url,'http://127.0.0.1:5500/client/dashboard.html')