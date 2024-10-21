// Import elements to control from the DOM
import { burgerIcon, overlayContainer, topNavbarMobile } from "../../DOM/storage-elements-dom.js";

const handleBurgerIconToggle = () => {
  // Toggle burger icon and menu on click
  burgerIcon.addEventListener('click', (ev) => {
    ev.preventDefault();  // Prevent page refresh

    // If the burger icon is currently an "X", change it back to the burger icon
    if (burgerIcon.src.includes("white-remove-icon.svg")) {
      burgerIcon.src = "../images/mobile-navbar/white-burger-icon.svg";
      overlayContainer.style.display = 'none';
      topNavbarMobile.style.display = 'none';
    } else {
      // Otherwise, change it to the "X" icon and show the overlay and menu
      burgerIcon.src = "../images/user-activity/white-remove-icon.svg";
      overlayContainer.style.display = 'flex';
      topNavbarMobile.style.display = 'flex';
    }
  });
}

export { handleBurgerIconToggle };
