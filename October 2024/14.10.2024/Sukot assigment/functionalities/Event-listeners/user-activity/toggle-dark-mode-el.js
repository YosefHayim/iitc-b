import { applyWhiteMode } from "../../DOM/apply-white-mode.js";
import { returnDarkMode } from "../../DOM/return-dark-mode.js";
import { toggleIconImage } from "../../DOM/storage-elements-dom.js";

// This function handles toggling between dark mode and light mode (white mode).
const toggleDarkMode = () => {
  // Check if dark mode is active based on local storage.
  const isDarkModeActive = localStorage.getItem('darkMode') === 'true';

  document.addEventListener('DOMContentLoaded', () => {
    // Apply white mode if dark mode was previously active.
    if (isDarkModeActive) {
      applyWhiteMode();
      toggleIconImage.classList.add('active'); // Set the toggle button to active state
    }

    // Add click event listener to the toggle button.
    toggleIconImage.addEventListener('click', (ev) => {
      ev.preventDefault();
      toggleIconImage.classList.toggle('active'); // Toggle the active state of the button

      // If the button is now in active state, apply white mode and save the state.
      if (toggleIconImage.classList.contains('active')) {
        applyWhiteMode();
        localStorage.setItem('darkMode', 'true'); // Save dark mode state in local storage
        
      } else {
        // If the button is not active, revert to dark mode and reset the state.
        returnDarkMode();
        localStorage.setItem('darkMode', 'false'); // Reset dark mode state in local storage
      }
    });
  });
};

export { toggleDarkMode };
