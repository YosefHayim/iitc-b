import pytest
from selenium import webdriver

def test_github_title():
  driver = webdriver.Chrome()
  driver.get('https://github.com/')
  assert 'GitHub' in driver.title
  driver.quit()