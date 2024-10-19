// Importing from the dom folder these elements to control them.
import {burgerIcon, overlayDiv , mobileMenu} from "./domEls.js";

const burgerIconActivate = () => {
  // If clicking change the burger icon to a X icon
  burgerIcon.addEventListener('click', (ev) => {
    // Preventing from re-rendering the current browser
    ev.preventDefault();
    
    // if  we preform a click and the source img of burgerIcon has already X icon and we change it to white burger
    if (burgerIcon.src.includes("white-remove-icon.svg")) {
      burgerIcon.src = "../images/mobile-navbar/white-burger-icon.svg";
      
      // We make the overlay and the mobileMenu navbar unseen.
      overlayDiv.style.display = 'none';
      mobileMenu.style.display = 'none';

      // Else the we preform a click that none of the conditions were met, we are changing it to a X icon and displaying the overlay and the mobileMenu
    } else {
      burgerIcon.src = "../images/user-activity/white-remove-icon.svg";
      
      overlayDiv.style.display = 'block';
      mobileMenu.style.display = 'flex';
    }
  });
}

export {burgerIconActivate};
