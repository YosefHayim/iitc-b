import { applyWhiteMode } from "../../DOM/apply-white-mode.js";
import { returnDarkMode } from "../../DOM/return-dark-mode.js";
import { toggleIconImage} from "../../DOM/storage-elements-dom.js";
// This function is responsible for the bright mode toggle.
const toggleDarkMode = () => {
  const isDarkModeActive = localStorage.getItem('darkMode') === 'true';

  document.addEventListener('DOMContentLoaded', () => {
    if (isDarkModeActive) {
      applyWhiteMode();
      toggleIconImage.classList.add('active'); // Ensure button is in active state
    }

    toggleIconImage.addEventListener('click', (ev) => {
      ev.preventDefault();
      toggleIconImage.classList.toggle('active');

      if (toggleIconImage.classList.contains('active')) {
        applyWhiteMode();
        localStorage.setItem('darkMode', 'true'); // Save dark mode state
        
      } else {
        returnDarkMode();
        localStorage.setItem('darkMode', 'false'); // Reset dark mode state
      }
    });
  });
};

export {toggleDarkMode}