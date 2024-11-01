import { goTBottomBtn } from "../../dom/storage-elements-dom.js";

// Checks if the user has scrolled to the bottom of the page.
const isAtBottom = () => {
  return (
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
  );
};

window.addEventListener("scroll", (ev) => {
  // Check if the "Go to Bottom" button exists before performing any actions.
  if (!goTBottomBtn) {
    return;
  }

  ev.preventDefault();

  // If the user has scrolled more than 400px, show the "Go to Bottom" button (if not already at the bottom).
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    if (!isAtBottom()) {
      goTBottomBtn.style.display = "block";
    }
  } else {
    // Hide the button if the user is not past the 400px scroll mark.
    goTBottomBtn.style.display = "none";
  }

  // Hide the button if the user has reached the bottom of the page.
  if (isAtBottom()) {
    goTBottomBtn.style.display = "none";
  }
});

// Handles the click event for the "Go to Bottom" button, smoothly scrolling the user to the bottom of the page.
const handleGoToBottomButtonClick = () => {
  // If the button element exists, add an event listener to it.
  if (goTBottomBtn) {
    goTBottomBtn.addEventListener("click", (ev) => {
      ev.preventDefault();

      // Smoothly scroll the user to the bottom of the page.
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });

      // Add an event listener to hide the button when the user reaches the bottom.
      window.addEventListener("scroll", () => {
        if (isAtBottom()) {
          goTBottomBtn.style.display = "none";
        }
      });
    });
  }
};

export { handleGoToBottomButtonClick };
