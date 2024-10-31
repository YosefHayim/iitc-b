import { displayAlertMessage } from "./alert-message-dom.js";
import { searchPaginationContainer } from "./storage-elements-dom.js";
// A function to check if the current API call has reached the maximum page.
const isMaxPageReached = (currentPage, MaxPage) => {
  if (currentPage === MaxPage) {
    displayAlertMessage("reached-last-page", currentPage);
    searchPaginationContainer.remove();
  }
};

export { isMaxPageReached };
