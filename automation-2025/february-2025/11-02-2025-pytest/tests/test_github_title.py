import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

def test_github_title(driver):
    driver.get("https://www.github.com")
    assert "GitHub" in driver.title

@pytest.mark.parametrize("search_term", ["python", "selenium", "pytest"])
def test_google_search(driver, search_term):
    driver.get("https://www.google.com")
    search_box = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.NAME, "q"))
    )
    search_box.send_keys(search_term)
    search_box.submit()
    WebDriverWait(driver, 10).until(
        EC.title_contains(search_term)
    )
    assert search_term in driver.title