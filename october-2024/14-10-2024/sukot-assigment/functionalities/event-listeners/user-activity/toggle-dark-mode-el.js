import { applyWhiteMode } from "../../dom/apply-white-mode.js";
import { applyDarkMode } from "../../dom/apply-dark-mode.js";
import { toggleIconImage } from "../../dom/storage-elements-dom.js";

const toggleThemeMode = () => {
  // Check if white mode is active from localStorage and apply the mode accordingly.
  const isWhiteModeActive = localStorage.getItem("whiteMode") === "true"; // Renamed variable

  if (isWhiteModeActive) {
    applyWhiteMode();
    toggleIconImage.classList.add("active"); // Ensure the toggle button reflects the state
  } else {
    applyDarkMode();
  }

  // Add click event listener to the toggle button.
  toggleIconImage.addEventListener("click", (ev) => {
    ev.preventDefault();
    toggleIconImage.classList.toggle("active"); // Toggle the active state of the button

    if (toggleIconImage.classList.contains("active")) {
      applyWhiteMode();
      localStorage.setItem("whiteMode", "true"); // Save white mode state in local storage
    } else {
      applyDarkMode(); // Apply dark mode
      localStorage.setItem("whiteMode", "false"); // Reset white mode state in local storage
    }
  });
};

export { toggleThemeMode };
