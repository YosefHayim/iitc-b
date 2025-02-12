from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
import time
import logging
import os

# Setup logging and screenshot folder
now_time = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
log_file = f"app_test_{now_time}.log"
screenshot_folder = f"screenshots_{now_time}"
os.makedirs(screenshot_folder, exist_ok=True)

logging.basicConfig(
    filename=log_file,
    filemode="w",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

logging.info("Starting Automation Test... ✅")

# WebDriver setup
service = Service()
options = webdriver.ChromeOptions()
options.add_argument("--window-size=2560,1440")
driver = webdriver.Chrome(service=service, options=options)

# Open the website
driver.get("https://atid.store/")
logging.info("Opened website: https://atid.store/")

def take_screenshot(element_name):
    """ Takes a screenshot and saves it with a timestamp and element name """
    screenshot_path = os.path.join(screenshot_folder, f"{element_name}_{datetime.now().strftime('%H-%M-%S')}.png")
    driver.save_screenshot(screenshot_path)
    logging.info(f"Screenshot taken: {screenshot_path}")

def log_test_case(test_id, scenario, steps, expected, actual, status):
    """ Logs a structured test case result """
    log_message = f"""
    ==============================
    Test Case ID: {test_id}
    Test Scenario: {scenario}
    Steps: {steps}
    Expected Result: {expected}
    Actual Result: {actual}
    Status: {status}
    ==============================
    """
    logging.info(log_message)

def contact_us():
    """ Automates filling out the contact us form with assertions and test case documentation """
    wait = WebDriverWait(driver, timeout=10)

    # Test Case 1: Click Contact Us button
    test_id = "TC_001"
    scenario = "User navigates to Contact Us page"
    steps = "Click on 'Contact Us' button"
    expected = "Contact Us page should open"

    try:
        contact_us_btn = wait.until(EC.element_to_be_clickable((By.XPATH, '/html/body/div/header/div[1]/div[1]/div/div/div/div[2]/div/div/div/nav/div/ul/li[7]/a')))
        assert contact_us_btn is not None
        contact_us_btn.click()
        take_screenshot("contact_us_button")
        actual = "Contact Us page opened successfully"
        status = "Pass"
    except Exception as e:
        actual = f"Failed to open Contact Us page - {str(e)}"
        status = "Fail"

    log_test_case(test_id, scenario, steps, expected, actual, status)

    # Test Case 2: Fill out contact form
    test_id = "TC_002"
    scenario = "User fills out the Contact Us form"
    steps = "Enter name, subject, email, and message. Click Submit."
    expected = "Form should be submitted successfully"

    try:
        name_input = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="wpforms-15-field_0"]')))
        name_input.send_keys('Joseph sabag')
        assert name_input.get_attribute("value") == "Joseph sabag"
        take_screenshot("name_input")

        subject_input = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="wpforms-15-field_5"]')))
        subject_input.send_keys('Automation project')
        assert subject_input.get_attribute("value") == "Automation project"
        take_screenshot("subject_input")

        email_input = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="wpforms-15-field_4"]')))
        email_input.send_keys('yosefisabag@gmail.com')
        assert email_input.get_attribute("value") == "yosefisabag@gmail.com"
        take_screenshot("email_input")

        text_input = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="wpforms-15-field_2"]')))
        text_input.send_keys('Hi')
        assert text_input.get_attribute("value") == "Hi"
        take_screenshot("message_input")

        submit_btn = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="wpforms-submit-15"]')))
        submit_btn.click()
        take_screenshot("submit_button")

        actual = "Form submitted successfully"
        status = "Pass"
    except Exception as e:
        actual = f"Form submission failed - {str(e)}"
        status = "Fail"

    log_test_case(test_id, scenario, steps, expected, actual, status)

def add_to_cart():
    """ Automates the Add to Cart process with assertions and test case documentation """
    wait = WebDriverWait(driver, timeout=10)

    # Test Case 1: Navigate to Shoes Page
    test_id = "TC_101"
    scenario = "User navigates to Shoes Page"
    steps = "Click on shoes item link"
    expected = "Shoes product page should open"

    try:
        shoes_item = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="post-2888"]/div/div/section[3]/div/div/div/div[3]/div/div/div/ul/li[1]/div[1]/a')))
        assert shoes_item is not None
        shoes_item.click()
        take_screenshot("shoes_item_page")
        actual = "Shoes product page opened successfully"
        status = "Pass"
    except Exception as e:
        actual = f"Failed to open Shoes product page - {str(e)}"
        status = "Fail"

    log_test_case(test_id, scenario, steps, expected, actual, status)

    # Test Case 2: Click "Add to Cart" button
    test_id = "TC_102"
    scenario = "User adds a product to cart"
    steps = "Click 'Add to Cart' button"
    expected = "Product should be added to cart"

    try:
        add_to_cart_btn = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="product-362"]/div[2]/form/button')))
        assert add_to_cart_btn is not None
        add_to_cart_btn.click()
        take_screenshot("add_to_cart")
        actual = "Product added to cart successfully"
        status = "Pass"
    except Exception as e:
        actual = f"Failed to add product to cart - {str(e)}"
        status = "Fail"

    log_test_case(test_id, scenario, steps, expected, actual, status)

    # Test Case 3: Click "Go to Cart" button
    test_id = "TC_103"
    scenario = "User navigates to Cart Page"
    steps = "Click 'Go to Cart' button"
    expected = "Cart page should open"

    try:
        go_to_cart_btn = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="ast-site-header-cart"]/div[1]/a')))
        assert go_to_cart_btn is not None
        go_to_cart_btn.click()
        take_screenshot("cart_page")
        actual = "Cart page opened successfully"
        status = "Pass"
    except Exception as e:
        actual = f"Failed to open cart page - {str(e)}"
        status = "Fail"

    log_test_case(test_id, scenario, steps, expected, actual, status)

    # Test Case 4: Click "Checkout" button
    test_id = "TC_104"
    scenario = "User proceeds to checkout"
    steps = "Click 'Checkout' button"
    expected = "Checkout page should open"

    try:
        checkout_btn = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="post-39"]/div/div/section[2]/div/div/div/div/div/div/div/div[2]/div/div/a')))
        assert checkout_btn is not None
        checkout_btn.click()
        take_screenshot("checkout_page")
        actual = "Checkout page opened successfully"
        status = "Pass"
    except Exception as e:
        actual = f"Failed to open checkout page - {str(e)}"
        status = "Fail"

    log_test_case(test_id, scenario, steps, expected, actual, status)


    # Test Case 5: fill checkout information
    test_id = "TC_105"
    scenario = "User fill checkout information"
    steps = "filling inputs information"
    expected = "successfully place the order"

    try:
        # Billing First Name
        first_name = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="billing_first_name"]')))
        assert first_name is not None
        first_name.send_keys('Joseph')
        take_screenshot("first_name_input")
        
        # Billing Last Name
        last_name = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="billing_last_name"]')))
        assert last_name is not None
        last_name.send_keys('Doe')
        take_screenshot("last_name_input")

        # Billing Company
        company = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="billing_company"]')))
        assert company is not None
        company.send_keys('TechCorp')
        take_screenshot("company_input")

        # Billing Address
        address = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="billing_address_1"]')))
        assert address is not None
        address.send_keys('123 Main Street')
        take_screenshot("address_input")

        # Town/ city
        town = wait.until(EC.element_to_be_clickable((By.XPATH,'//*[@id="billing_city"]')))
        assert address is not None
        town.send_keys('holon')
        take_screenshot('town_input')

        # Billing Postcode
        postcode = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="billing_postcode"]')))
        assert postcode is not None
        postcode.send_keys('123456')
        take_screenshot("postcode_input")

        # Billing Phone
        phone = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="billing_phone"]')))
        assert phone is not None
        phone.send_keys('1234567890')
        take_screenshot("phone_input")

        # Billing Email
        email = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="billing_email"]')))
        assert email is not None
        email.send_keys('joseph@example.com')
        take_screenshot("email_input")

        # Place Order Button
        place_order = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@id="place_order"]')))
        assert place_order is not None
        place_order.click()
        take_screenshot("order_placed")

        actual = "Filled all billing inputs and placed order"
        status = "Pass"

    except Exception as e:
        actual = f"Failed to complete checkout form - {str(e)}"
        status = "Fail"

    log_test_case(test_id, scenario, steps, expected, actual, status)


# Run the add to cart function
add_to_cart()

logging.info("Add to Cart Test completed successfully")
time.sleep(5000)

driver.quit()
logging.info("Closed WebDriver")
