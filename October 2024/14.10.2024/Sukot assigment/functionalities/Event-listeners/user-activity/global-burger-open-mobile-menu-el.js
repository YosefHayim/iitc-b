import { burgerIcon, overlayContainer, topNavbarMobile } from "../../DOM/storage-elements-dom.js";
// This function handles the burger mobile Icon, we attach event listener to it
const handleBurgerIconToggle = () => {
  burgerIcon.addEventListener('click', (ev) => {
    ev.preventDefault(); 
    
    // Add to the burgerIcon a class list of active with a toggle.
    burgerIcon.classList.toggle('active');
    
    // If we clicked on the icon and it contains the class active we change the src to X icon. and apply the overlay effect and display the navbar for the mobile 
    if (burgerIcon.classList.contains('active')) {
      burgerIcon.src = "../images/user-activity/white-remove-icon.svg";
      overlayContainer.style.display = 'flex';
      topNavbarMobile.style.display = 'flex';
    
    // Else we clicked and the icon doesn't have the class active we change back to the burger Icon. and setting the overlay and navbar mobile to none.
    } else {
      burgerIcon.src = "../images/mobile-navbar/white-burger-icon.svg";
      overlayContainer.style.display = 'none';
      topNavbarMobile.style.display = 'none';
    }
    
  });
}

export { handleBurgerIconToggle };
