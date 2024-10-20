import { goBackTopBtn } from "../../DOM/storage-elements-dom.js";

// Show/hide the button based on scroll position (200px)
window.addEventListener('scroll', (ev) => {
  ev.preventDefault()
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    goBackTopBtn.style.display = 'block';  // Show the button when scrolled over 200px
  } else {
    goBackTopBtn.style.display = 'none';  // Hide the button when scrolled less than 200px
  }
});

// Scroll to the top when the button is clicked
const handleBackToTopButtonClick = () => {
  goBackTopBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

export { handleBackToTopButtonClick };
