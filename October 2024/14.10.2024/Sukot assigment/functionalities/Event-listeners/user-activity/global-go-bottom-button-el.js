import { goTBottomBtn } from "../../DOM/storage-elements-dom.js";

// Checking if the user is at the bottom of the page and if he does we return the parameter to the event listener.
const isAtBottom = () => {
  return (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
};

window.addEventListener('scroll', (ev) => {
  // check if the button exist in the html before preform an action.
  if (!goTBottomBtn) {
    return
  }
  ev.preventDefault()
  // If the user scrolled more than 400 px on the body browser than we display him the go to bottom button.
  if (document.body.scrollTop > 400) {
    if (!isAtBottom()) {
      goTBottomBtn.style.display = 'block';
    }
  // Else the user didn't we don't display it.
  } else {
    goTBottomBtn.style.display = 'none';
  }
// if the user is at the bottom we don't display it also.
  if (isAtBottom()) {
    goTBottomBtn.style.display = 'none';
  }
});

// This function is moving the user screen position to the bottom.
const handleGoToBottomButtonClick = () => {
  // If the button element was found we preform the next activity.
  if (goTBottomBtn) {
    // We attach to the button event listener
    goTBottomBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      // And if the user clicked on the button we send him to the bottom of the browser. with a smooth behavior
      window.scrollTo({ 
        top: document.documentElement.scrollHeight,
        behavior: 'smooth' 
      });
      // We attach another event listener and if he is at the bottom we turn the go to bottom button to none.
      window.addEventListener('scroll', () => {
        if (isAtBottom()) {
          goTBottomBtn.style.display = 'none';
        }
      });
    });
  }
}

export { handleGoToBottomButtonClick };
