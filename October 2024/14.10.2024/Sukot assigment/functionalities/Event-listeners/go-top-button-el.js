import { goBackTopBtn } from "../DOM/storage-elements-dom.js";

// Show/hide the button based on scroll position (200px)
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    goBackTopBtn.style.display = 'block';  // Show the button when scrolled over 200px
  } else {
    goBackTopBtn.style.display = 'none';  // Hide the button when scrolled less than 200px
  }
});

// Scroll to the top when the button is clicked
const backTopClick = () => {
  goBackTopBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

export { backTopClick };
