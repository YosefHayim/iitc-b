from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
import time
import random
import logging

# Setup Logging
now_time = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
log_file = f"app_test_{now_time}.log"
logging.basicConfig(
    filename=log_file,
    filemode="w",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

# Setup WebDriver
service = Service()
options = webdriver.ChromeOptions()
# options.add_argument("--window-size=2560,1440")
# options.add_argument('--headless')  # Uncomment for headless mode
driver = webdriver.Chrome(service=service, options=options)

driver.get("https://atid.store/")
logging.info("Opened the website.")

def get_all_links_by_depth(depth=3):
    for i in range(depth):  # Repeat for the given depth
        logging.info(f"Depth {i+1}: Searching for links...")

        # Find all <a> elements with an href that has at least 3 slashes
        els = driver.find_elements(By.XPATH, "//a[contains(@href, 'https') and (string-length(@href) - string-length(translate(@href, '/', ''))) >= 2")

        if not els:
            logging.warning("No valid links found, stopping.")
            print("No valid links found, stopping.")
            break

        # Randomly choose a link
        random_link = random.choice(els)
        link_href = random_link.get_attribute("href")

        assert link_href, "Selected link has no href attribute!"  # Ensure the link has an href
        logging.info(f"Clicking: {link_href}")
        print(f"Clicking: {link_href}")

        # Take screenshot before clicking
        screenshot_path = f"screenshot_depth_{i+1}_{now_time}.png"
        try:
            random_link.screenshot(screenshot_path)
            logging.info(f"Screenshot saved: {screenshot_path}")
        except Exception as e:
            logging.error(f"Failed to capture screenshot: {e}")

        # Click the link
        try:
            random_link.click()
            logging.info("Successfully clicked the link.")
        except Exception as e:
            logging.error(f"Click failed: {e}")
            print("Click failed:", e)
            break

        # Wait for new page to load
        time.sleep(5)  

get_all_links_by_depth()

# Close the driver
driver.quit()
logging.info("Test completed and browser closed.")
