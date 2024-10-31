import {
  burgerIcon,
  overlayContainer,
  topNavbarMobile,
} from "../../dom/storage-elements-dom.js";

// Handles the burger icon toggle for the mobile menu by attaching an event listener to it.
const handleBurgerIconToggle = () => {
  burgerIcon.addEventListener("click", (ev) => {
    ev.preventDefault();

    // Toggle the 'active' class on the burger icon.
    burgerIcon.classList.toggle("active");

    // If the burger icon is active (menu is open), switch to the "X" icon, show the overlay, and display the mobile navbar.
    if (burgerIcon.classList.contains("active")) {
      burgerIcon.src = "../images/user-activity/white-remove-icon.svg";
      overlayContainer.style.display = "flex";
      topNavbarMobile.style.display = "flex";

      // If the burger icon is not active (menu is closed), switch back to the burger icon and hide the overlay and mobile navbar.
    } else {
      burgerIcon.src = "../images/mobile-navbar/white-burger-icon.svg";
      overlayContainer.style.display = "none";
      topNavbarMobile.style.display = "none";
    }
  });
};

export { handleBurgerIconToggle };
