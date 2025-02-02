from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.common.exceptions import NoSuchElementException ,TimeoutException,NoAlertPresentException
from selenium.webdriver.support import expected_conditions as EC


import time

service = Service(executable_path="./chromedriver")
# service = Service()
options = webdriver.ChromeOptions()
options.add_argument('--headless')
driver = webdriver.Chrome(service=service, options=options)

# 1 Open Browser
driver.get("http://localhost:5174")
driver.maximize_window()

def check_the_url (expectedUrl):
    current_url = driver.current_url
    if current_url == expectedUrl:
        return "✅URL is correct:", current_url
    else:
        return f"❌URL mismatch! Expected: {expectedUrl}, but got: {current_url}"

def click_on_menu_nav(page_name,exp_url):
    try:
        button = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.XPATH,f"//a[normalize-space()='{page_name}']"))
        )
        button.click()
        print(check_the_url(exp_url))
    except TimeoutException:
        print("❌ Element not Found in time.")  

def check_if_p_element_exists_and_contain_text(p_xpath, text):
    try:
        p_element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.XPATH, p_xpath))
        )
        p_text = p_element.text.strip() 
        if text: 
            if text in p_text:
                print(f"✅ The <p> element contains the expected text: '{text}'")
            else:
                print(f"❌ The <p> element does not contain the expected text.\nExpected: '{text}'\nFound: '{p_text}'")
        else: 
            print(f"✅ The <p> element exists '{p_text}'")

    except TimeoutException:
        print(f"❌ The <p> element with XPath '{p_xpath}' was not found.")

def click_on_element(xpath):
    try:
        element = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.XPATH,xpath))
        )
        element.click()
    except TimeoutException:
        print("❌ Element not Found in time.")  
    
def check_alert():
    try:
        alert = WebDriverWait(driver, 5).until(EC.alert_is_present())
        alert_text = alert.text 
        print(f"✅ Alert appeared with text: {alert_text}")
        alert.accept() 
    except TimeoutException:  
        print("❌ No alert appeared.")
    except NoAlertPresentException:
        print("❌ No alert present.")

def find_input_and_add_value(xpath, value):
    try:
        input_element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.XPATH, xpath))
        )
        input_element.clear()  # Clears the input field before entering new value
        input_element.send_keys(value)  # Enters the provided value
        print(f"✅ Entered '{value}' into input field: {xpath}")
    except TimeoutException:
        print(f"❌ Input field not found: {xpath}") 

def check_if_dropdown_element_exists_and_chose_value(dropdown_xpath, value):
    try:
        dropdown_element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.XPATH, dropdown_xpath))
        )
        select = Select(dropdown_element) 
        options_texts = [option.text.strip() for option in select.options]  

        if value in options_texts:
            select.select_by_visible_text(value)  
            print(f"✅ Successfully selected '{value}' from the dropdown.")
        else:
            print(f"❌ The value '{value}' is not available in the dropdown.\nAvailable options: {options_texts}")
    
    except TimeoutException:
        print(f"❌ The dropdown element with XPath '{dropdown_xpath}' was not found.")

def check_if_checkboxOrRadio_element_exists_and_click_on_it(checkbox_xpath):
    try:
        checkbox_element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.XPATH, checkbox_xpath))
        )
        checkbox_element.click()
        print(f"✅ Checkbox clicked successfully.")
       
    except TimeoutException:
        print(f"❌ The checkbox element with XPath '{checkbox_xpath}' was not found.")


#  Check Buttons & Links 
click_on_menu_nav("Buttons & Links","http://localhost:5174/buttons-links")
click_on_element("//button[@id='submit-btn']")
check_alert()
click_on_element("//a[normalize-space()='Learn More']")
check_alert()
#  Check Forms Page 
click_on_menu_nav("Forms","http://localhost:5174/forms")
find_input_and_add_value("//input[@id='username']","haviv")
find_input_and_add_value("//input[@id='password']","haviv123")
click_on_element("//button[normalize-space()='Login']")
check_if_p_element_exists_and_contain_text("/html[1]/body[1]/div[1]/div[1]/div[1]/p[1]","haviv")
check_if_p_element_exists_and_contain_text("/html[1]/body[1]/div[1]/div[1]/div[1]/p[1]","haviv123")
#  Check Dropdowns Page 
click_on_menu_nav("Dropdowns", "http://localhost:5174/dropdowns")
check_if_dropdown_element_exists_and_chose_value("//select[@id='country-dropdown']","United States")
check_if_p_element_exists_and_contain_text("/html[1]/body[1]/div[1]/div[1]/div[1]/p[1]","US")
#  Check Delays Page 
click_on_menu_nav("Delays", "http://localhost:5174/delays")
check_if_p_element_exists_and_contain_text("//p[normalize-space()='Dynamic Content Loaded!']","")
#  Check Checkboxes & Radios Page 
click_on_menu_nav("Checkboxes & Radios", "http://localhost:5174/checkboxes-radios")
check_if_checkboxOrRadio_element_exists_and_click_on_it("//label[normalize-space()='Accept Terms']")
check_if_p_element_exists_and_contain_text("/html[1]/body[1]/div[1]/div[1]/div[1]/p[1]","Checked")
check_if_checkboxOrRadio_element_exists_and_click_on_it("//label[normalize-space()='Option 2']")
check_if_p_element_exists_and_contain_text("/html[1]/body[1]/div[1]/div[1]/div[1]/p[2]","Option 2")


# //select[@id='country-dropdown']
# try:
#     msg= WebDriverWait(driver,5).until(
#         EC.presence_of_element_located((By.XPATH,"//p[normalize-space()='Dynamic Content Loaded!']"))
#     )
#     print(msg.text)
#     print("Loaded")
# except TimeoutException:
#     print("Element not Found in time.")

# dropdown_button = driver.find_element(By.XPATH, "//a[normalize-space()='Dropdowns']")
# dropdown_button.click()
# time.sleep(3)

