import { alertMessage } from "../../DOM/alert-message-dom.js";
import { searchPaginationDiv } from "../../DOM/storage-elements-dom.js";
import { searchMovieByName } from "../../get-api-calls/get-movie-by-name.js";
import { decreasePage } from "../../global/decreasing-page.js";
import { increasePage } from "../../global/increasing-page.js";

let count = 1

const clickSearchPageBtn = () => {
  searchPaginationDiv.addEventListener('click', (ev) => {
    ev.preventDefault();

    let params = new URLSearchParams(window.location.search);
    const querySearch = params.get('query')    

    const button = ev.target.closest('button');
    if (button.classList.contains('next-page')) {
      count = increasePage(count)

      searchMovieByName(querySearch,count)      
      
    } else {
      if (count === 1) {
        let message = `You can't go lower than 1.`
        let backgroundColor = `red`
        alertMessage(message,backgroundColor)
      }
      count = decreasePage(count)
      searchMovieByName(querySearch,count)      
      
    }
  });
};

export { clickSearchPageBtn };
