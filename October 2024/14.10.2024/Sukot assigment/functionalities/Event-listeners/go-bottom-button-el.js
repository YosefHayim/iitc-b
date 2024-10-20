import { goTBottomBtn } from "../DOM/storage-elements-dom.js";

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    goTBottomBtn.style.display = 'block';  
  } else {
    goTBottomBtn.style.display = 'none';
  }
});

const goBottomClick = () => {
  goTBottomBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    window.scrollTo({ 
top: document.documentElement.scrollHeight,
      behavior: 'smooth' 
    });
  });
};

export { goBottomClick };
