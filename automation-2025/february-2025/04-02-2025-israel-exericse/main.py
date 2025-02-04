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

service = Service()
options = webdriver.ChromeOptions()
options.add_argument("--window-size=2560,1440")
# options.add_argument('--headless')
driver = webdriver.Chrome(service=service, options=options)

driver.get("https://atid.store/")


def check_if_element_visible(element_name, xpath):
    try:
        logging.info(f"Checking the {element_name}")
        element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.XPATH, xpath))
        )
        logging.info(f"✅ {element_name} found!")
        element.screenshot(f"./test-{element_name}.png")
        assert element.is_displayed(), f"❌ The {element_name} is not displayed."
        logging.info(f"✅ The {element_name} is displayed !")
        assert element.is_displayed, f"❌ The {element_name} is not displayed 2."

    except AssertionError as e:
        logging.info(e)
    except TimeoutException:
        logging.info(f"❌ {element_name} NOT FOUND IN TIME!")