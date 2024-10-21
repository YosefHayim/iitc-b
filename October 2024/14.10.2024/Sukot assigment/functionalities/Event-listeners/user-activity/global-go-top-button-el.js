import { goBackTopBtn } from "../../DOM/storage-elements-dom.js";

window.addEventListener('scroll', (ev) => {
  ev.preventDefault()
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    goBackTopBtn.style.display = 'block'; 
  } else {
    goBackTopBtn.style.display = 'none';
  }
});

const handleBackToTopButtonClick = () => {
  goBackTopBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

export { handleBackToTopButtonClick };
