import { goTBottomBtn } from "../../DOM/storage-elements-dom.js";

const isAtBottom = () => {
  return (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
};

window.addEventListener('scroll', (ev) => {
  if (!goTBottomBtn) {
    console.log('Bottom button not relevant for this page.');
    return
  }
  
  ev.preventDefault()
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    if (!isAtBottom()) {
      goTBottomBtn.style.display = 'block';
    }
  } else {
    goTBottomBtn.style.display = 'none';
  }

  if (isAtBottom()) {
    goTBottomBtn.style.display = 'none';
  }
});

const handleGoToBottomButtonClick = () => {
  if (goTBottomBtn) {
    goTBottomBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      window.scrollTo({ 
        top: document.documentElement.scrollHeight,
        behavior: 'smooth' 
      });
  
      window.addEventListener('scroll', () => {
        if (isAtBottom()) {
          goTBottomBtn.style.display = 'none';
        }
      });
    });

  } else {
    console.log(`Bottom button not relevant for this page.`); 
  }

}

export { handleGoToBottomButtonClick };
