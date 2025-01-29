from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time
from selenium.webdriver.common.by import By

service = Service(executable_path="./chrome_driver.exe")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

def get_to_item():
  driver.get("https://atid.store/")
  driver.find_element(By.XPATH, '/html/body/div/header/div[1]/div[1]/div/div/div/div[2]/div/div/div/nav/div/ul/li[2]/a').click()
  driver.implicitly_wait(2)
  driver.find_element(By.XPATH,'/html/body/div/div[1]/div/div[2]/main/div/ul/li[2]/div[1]/a').click()
  print(driver.current_url)
  driver.quit()

def contains_atid():
  driver.get("https://atid.store/")
  title_web = driver.find_element(By.XPATH,'/html/body/div/div[1]/div/div/main/article/div/div/section[1]/div[2]/div/div/div[1]/div/h1').get_attribute('innerText')
  if title_web.find('atid'):
    print(f'success', title_web)
    driver.quit()

def check_shop_button():
  driver.get("https://atid.store/")
  shop_now = driver.find_element(By.XPATH,'/html/body/div/div[1]/div/div/main/article/div/div/section[1]/div[2]/div/div/div[4]/div/div/a').get_attribute('innerText')
  if shop_now:
    print('shop now button exist text is:',shop_now)
    driver.quit()

def click_shop_now():
  homepage = driver.get("https://atid.store/")
  driver.find_element(By.XPATH,'/html/body/div/div[1]/div/div/main/article/div/div/section[1]/div[2]/div/div/div[4]/div/div/a').click()
  driver.current_url
  if homepage != driver.current_url:
    print('the url has been changed.')
  driver.quit()

def check_logo():
  homepage = driver.get("https://atid.store/")
  class_of_logo = driver.find_element(By.XPATH,'/html/body/div/header/div[1]/div[1]/div/div/div/div[1]/div[1]/div/span/a').get_attribute('class')
  if class_of_logo:
    print(class_of_logo)
    driver.quit

def check_search_input():
  driver.get('https://atid.store/')
  driver.find_element(By.XPATH, '/html/body/div/header/div[1]/div[1]/div/div/div/div[3]/div[2]/div').click()
  time.sleep(10)
  driver.quit()


def product_categories():
    driver.get('https://atid.store/')
    menu_items = driver.find_elements(By.XPATH, '/html/body/div/header/div[1]/div[1]/div/div/div/div[2]/div/div/div/nav/div/ul/li')
    for item in menu_items:
        text = item.text.strip()  
        print(text)
        if text in ['MEN', 'WOMEN', 'ACCESSORIES']:
            print('It is valid.')
            driver.quit()


def get_product_imgs():
  driver.get('https://atid.store/store/')
  all_imgs_of_page = driver.find_elements(By.TAG_NAME,'img')
  for img in all_imgs_of_page:
      img_url = img.get_attribute("src") 
      print(img_url)
  driver.quit() 

time.sleep(1000)