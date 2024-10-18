import {burgerIcon, overlayDiv , mobileMenu} from "./domEls.js";

const burgerIconActivate = () => {
  burgerIcon.addEventListener('click', (ev) => {
    ev.preventDefault();
    
    if (burgerIcon.src.includes("white-remove-icon.svg")) {
      // Change the icon back to the burger
      burgerIcon.src = "../images/mobile-navbar/white-burger-icon.svg";
      
      // Hide the mobile menu and overlay
      overlayDiv.style.display = 'none';
      mobileMenu.style.display = 'none';
    } else {
      // Change the icon to the remove icon
      burgerIcon.src = "../images/user-activity/white-remove-icon.svg";
      
      // Show the mobile menu and overlay
      overlayDiv.style.display = 'block';
      mobileMenu.style.display = 'flex';
    }
  });
}

export {burgerIconActivate};
