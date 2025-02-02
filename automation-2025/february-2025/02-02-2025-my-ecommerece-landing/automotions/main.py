from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime 
import time
import logging

now_time = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')  
logging.basicConfig(
    filename=f"app_test{now_time}.log",
    filemode="w",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

logging.info("starting Automation Test ... ✅")
service = Service()
options = webdriver.ChromeOptions()
options.add_argument("--window-size=2560,1440")
options.add_argument('--headless')
driver = webdriver.Chrome(service=service, options=options)

driver.get("http://localhost:5173")


# Assert a element is displayed
def check_if_element_visible(element_name, xpath):    
    try:
        logging.info(f"Checking the {element_name}")
        element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.XPATH, xpath))
        )
        logging.info(f"✅ {element_name} found!")
        element.screenshot(f"./test-{element_name}.png")
        assert element.is_displayed(), f"❌ The {element_name} is not displayed."
        assert element.is_enabled , f"❌ The {element_name} is not displayed."
        logging.info(f"✅ The {element_name} is displayed !")
    
    except AssertionError as e:
        logging.info(f"❌ {element_name} NOT FOUND!")
    except TimeoutException:
        logging.info(f"❌ {element_name} NOT FOUND!")

# Assert a element is enabled
def check_if_element_enabled(element_name, xpath):    
    try:
        logging.info(f"Checking the {element_name}")
        element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.XPATH, xpath))
        )
        logging.info(f"✅ {element_name} found!")
        element.screenshot(f"./test-{element_name}.png")
        assert element.is_enabled , f"❌ The {element_name} is not enabled."
        logging.info(f"✅ The {element_name} is displayed !")
    
    except AssertionError as e:
        logging.info(f"❌ {element_name} NOT FOUND!")
    except TimeoutException:
        logging.info(f"❌ {element_name} NOT FOUND!")

def validate_email_field(email_id, email_value):
    try:
        logging.info("Checking email field behavior...")

        email_input = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, email_id))
        )
        print(email_input)
        assert email_input.is_displayed(), "❌ Email field is not displayed!"
        assert email_input.is_enabled(), "❌ Email field is disabled!"

        email_input.clear()
        email_input.send_keys(email_value)

        if "@" not in email_value :
            logging.warning(f"❌ Invalid email format: {email_value}, `@` missing.")
        else:
            if not email_value.endswith(".com"):
                logging.warning(f"❌ Invalid email format: {email_value}, missing `.com` ")
            else:
                logging.info(f"✅ Valid email format: {email_value}")

        # Take a screenshot for validation
        email_input.screenshot(f"./test-email-{email_value}.png")

    except AssertionError as e:
        logging.error(e)
    except TimeoutException:
        logging.error("❌ Email field was not found in time!")


# 1a - Assert page title
try:
    assert "Vite + React" in driver.title, "❌The title Doesn't match"
    
except AssertionError as e:
    print(e)

#  1b - Check the Header elements are visible
# check_if_element_visible("search input","//input[@id=':r1:']")
# check_if_element_enabled("dark/light mode checkbox", "//input[@type='checkbox']")
# check_if_element_visible("cart button", "//button[normalize-space()='Cart']")
# check_if_element_visible("broken action button", "//button[normalize-space()='Broken Action']")

#  1c - Ensure the “Featured Products” heading is present.
check_if_element_visible("Featured Products h4", "//h4[normalize-space()='Featured Products']")

# 2a - Validate the email field behavior 
email_input_id = ":r7:"
validate_email_field("haviv.com",email_input_id)
validate_email_field("haviv@.om",email_input_id)
validate_email_field("haviv@gm.com",email_input_id)



# for i in range(5):  # Loop 5 times
#     driver.save_screenshot(f"./screenshots/page_full_screen_{now_time}.png")
    
#     if i < 4:  
#         time.sleep(5)

# Assert a input label is match
# try:
#     label_element = WebDriverWait(driver, 5).until(
#         EC.presence_of_element_located((By.XPATH, "//label[@for=':r3:']"))
#         ) 
    
#     label_text = label_element.text.strip()
#     assert label_text=="Enter your email", "Not excepted label"
    
# except AssertionError as e:
#     print(e)
# except TimeoutException:
#     print("❌ The label  does not match.")

                    

