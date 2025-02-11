import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

@pytest.mark.parametrize("user_details, should_show_alert", [
    ({"userName": "faildUserName", "password": "wrongPassword"}, False),
    ({"userName": "faildUserName", "password": "password123"}, False),
    ({"userName": "testuser", "password": "wrongPassword"}, False),
    ({"userName": "testuser", "password": "password123"}, True),  
])
def test_login(driver, user_details, should_show_alert):
    driver.get("http://127.0.0.1:5500/test_page.html")

    userName_input = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id='username']"))
    )
    password_input = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id='password']"))
    )

    userName_input.send_keys(user_details["userName"])
    password_input.send_keys(user_details["password"])

    submit_button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//button[@id='loginBtn']"))
    )
    submit_button.click()

    if should_show_alert:
        alert = WebDriverWait(driver, 10).until(EC.alert_is_present())
        assert "Login successful!" in alert.text
        alert.accept()  
    else:
        error_message = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//p[@id='errorMessage']"))
        )
        assert error_message.is_displayed(), "Error message should be displayed but was not found"