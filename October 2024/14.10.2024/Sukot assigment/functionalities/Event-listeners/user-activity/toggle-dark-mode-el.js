import { applyDarkModeStyles } from "../../DOM/dark-mode-dom.js";
import { removeDarkModeStyles } from "../../DOM/white-mode-dom.js";
import { toggleIconImage} from "../../DOM/storage-elements-dom.js";

const toggleDarkMode = () => {
  const isDarkModeActive = localStorage.getItem('darkMode') === 'true';

  document.addEventListener('DOMContentLoaded', () => {
    if (isDarkModeActive) {
      applyDarkModeStyles();
      toggleIconImage.classList.add('active'); // Ensure button is in active state
    }

    toggleIconImage.addEventListener('click', (ev) => {
      ev.preventDefault();
      toggleIconImage.classList.toggle('active');

      if (toggleIconImage.classList.contains('active')) {
        applyDarkModeStyles();
        localStorage.setItem('darkMode', 'true'); // Save dark mode state
        
      } else {
        removeDarkModeStyles();
        localStorage.setItem('darkMode', 'false'); // Reset dark mode state
      }
    });
  });
};

export {toggleDarkMode}