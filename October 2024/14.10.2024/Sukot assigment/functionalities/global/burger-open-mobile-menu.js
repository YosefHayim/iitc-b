// Import elements to control from the DOM
import { burgerIcon, overlayDiv, mobileMenu } from "./domEls.js";

const burgerIconActivate = () => {
  // Toggle burger icon and menu on click
  burgerIcon.addEventListener('click', (ev) => {
    ev.preventDefault();  // Prevent page refresh

    // If the burger icon is currently an "X", change it back to the burger icon
    if (burgerIcon.src.includes("white-remove-icon.svg")) {
      burgerIcon.src = "../images/mobile-navbar/white-burger-icon.svg";
      overlayDiv.style.display = 'none';
      mobileMenu.style.display = 'none';
    } else {
      // Otherwise, change it to the "X" icon and show the overlay and menu
      burgerIcon.src = "../images/user-activity/white-remove-icon.svg";
      overlayDiv.style.display = 'block';
      mobileMenu.style.display = 'flex';
    }
  });
}

export { burgerIconActivate };
