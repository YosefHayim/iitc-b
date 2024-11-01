import { displayAlertMessage } from "./alert-message-dom.js";
import { searchPaginationContainer } from "./storage-elements-dom.js";

// A function to check if the current API call has reached the maximum page.
const isMaxPageReached = (currentPage, MaxPage) => {
  if (!searchPaginationContainer) {
    return;
  }

  if (currentPage === MaxPage) {
    displayAlertMessage("reached-last-page", currentPage);

    const nextPageButton =
      searchPaginationContainer.querySelector(".next-page");
    if (nextPageButton) {
      nextPageButton.style.display = "none";
    }
    return null; // Return after hiding the button
  } else {
    // Show the next page element if max page is not reached
    const nextPageElement =
      searchPaginationContainer.querySelector(".next-page");
    if (nextPageElement) {
      nextPageElement.style.display = "block";
    }
    return nextPageElement;
  }
};

export { isMaxPageReached };
