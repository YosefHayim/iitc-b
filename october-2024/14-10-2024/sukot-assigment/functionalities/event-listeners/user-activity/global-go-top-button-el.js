import { goBackTopBtn } from "../../dom/storage-elements-dom.js";

// This function displays the "Back to Top" button when the user scrolls down 1000px and hides it otherwise.
window.addEventListener("scroll", (ev) => {
  // Check if the "Back to Top" button exists before performing any actions.
  if (!goBackTopBtn) {
    return;
  }

  ev.preventDefault();

  // Show the button if the user has scrolled more than 1000px, hide it otherwise.
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    goBackTopBtn.style.display = "block";
  } else {
    goBackTopBtn.style.display = "none";
  }
});

// Handles the click event for the "Back to Top" button, smoothly scrolling the user back to the top of the page.
const handleBackToTopButtonClick = () => {
  if (goBackTopBtn) {
    goBackTopBtn.addEventListener("click", (ev) => {
      ev.preventDefault();

      // Scroll the user smoothly back to the top of the page.
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
};

export { handleBackToTopButtonClick };
