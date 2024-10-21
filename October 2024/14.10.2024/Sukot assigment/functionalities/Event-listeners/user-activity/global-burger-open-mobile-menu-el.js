import { burgerIcon, overlayContainer, topNavbarMobile } from "../../DOM/storage-elements-dom.js";

const handleBurgerIconToggle = () => {
  burgerIcon.addEventListener('click', (ev) => {
    ev.preventDefault(); 
    
    burgerIcon.classList.toggle('active');
    
    if (burgerIcon.classList.contains('active')) {
      burgerIcon.src = "../images/user-activity/white-remove-icon.svg";
      overlayContainer.style.display = 'flex';
      topNavbarMobile.style.display = 'flex';

    } else {
      burgerIcon.src = "../images/mobile-navbar/white-burger-icon.svg";
      overlayContainer.style.display = 'none';
      topNavbarMobile.style.display = 'none';
    }
    
  });
}

export { handleBurgerIconToggle };
