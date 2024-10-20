import { goTBottomBtn } from "../../DOM/storage-elements-dom.js";

// Check if the user is at the bottom of the page
const isAtBottom = () => {
  return (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
};

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    if (!isAtBottom()) {
      goTBottomBtn.style.display = 'block';
    }
  } else {
    goTBottomBtn.style.display = 'none';
  }

  // Hide the button if the user scrolls to the bottom
  if (isAtBottom()) {
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

    // After the scroll ends, check if at the bottom
    window.addEventListener('scroll', () => {
      if (isAtBottom()) {
        goTBottomBtn.style.display = 'none';
      }
    });
  });
};

export { goBottomClick };
