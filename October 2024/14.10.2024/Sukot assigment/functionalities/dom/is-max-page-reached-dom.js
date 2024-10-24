import { displayAlertMessage } from "./alert-message-dom.js"
import { searchPaginationContainer } from "./storage-elements-dom.js"

const isMaxPageReached = (currentPage,MaxPage) => {

  if (currentPage === MaxPage) {
  displayAlertMessage('reached-last-page',currentPage)
  searchPaginationContainer.remove()
  }

}

export {isMaxPageReached}