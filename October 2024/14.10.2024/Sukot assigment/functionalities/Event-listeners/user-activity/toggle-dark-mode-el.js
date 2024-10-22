import { toggleIconImage } from "../../DOM/storage-elements-dom.js";
import { turnWhiteWeb, turnDarkWeb } from "../../DOM/white-mode-toggle-dom.js";

const toggleDarkMode = () => {
  document.addEventListener('DOMContentLoaded', () => {
    toggleIconImage.addEventListener('click', (ev) => {
      ev.preventDefault();
      console.log('clicked');
      
      toggleIconImage.classList.toggle('active');
    
      if (toggleIconImage.classList.contains('active')) {
        toggleIconImage.src = '../images/user-activity/white-circle.svg';
        turnWhiteWeb();  // Enable white mode
      } else {
        toggleIconImage.src = '../images/user-activity/red-circle.svg';
        turnDarkWeb();  // Revert to dark mode
      }
    });
  });
};

export { toggleDarkMode };
