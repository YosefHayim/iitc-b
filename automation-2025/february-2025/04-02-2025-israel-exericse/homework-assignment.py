from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
import time
import random
import logging

# now_time = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
# logging.basicConfig(
#     filename=f"app_test{now_time}.log",
#     filemode="w",
#     level=logging.INFO,
#     format="%(asctime)s - %(levelname)s - %(message)s"
# )

service = Service()
options = webdriver.ChromeOptions()
options.add_argument("--window-size=2560,1440")
# options.add_argument('--headless')
driver = webdriver.Chrome(service=service, options=options)

driver.get("https://atid.store/")


def get_all_links_by_depth(depth=3):
    for _ in range(depth):  # Repeat for the given depth
        els = driver.find_elements("xpath", "//a[contains(@href, 'https') and (string-length(@href) - string-length(translate(@href, '/', ''))) >= 3]")
        
        if not els:  # Stop if no valid links are found
            print("No valid links found, stopping.")
            break

        random_link = random.choice(els)
        print("Clicking:", random_link.get_attribute("href"))
        random_link.click()

        time.sleep(3)  # Wait for the page to load (adjust as needed)

get_all_links_by_depth()