import { goBackTopBtn } from "../../DOM/storage-elements-dom.js";
// This function is responsible that if the user is at the bottom position so if he clicks the up button he scrolled smoothly to the top of the browser screen.
window.addEventListener('scroll', (ev) => {
  
  if (!goBackTopBtn) {
    return
  }
  ev.preventDefault()
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    goBackTopBtn.style.display = 'block'; 
  } else {
    goBackTopBtn.style.display = 'none';
  }
});

const handleBackToTopButtonClick = () => {
  if (goBackTopBtn) {
    goBackTopBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

export { handleBackToTopButtonClick };
