import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { searchPaginationContainer } from "../../DOM/storage-elements-dom.js";
import { searchMovieByName } from "../../get-api-calls/get-movie-by-name.js";
import { popularMoviesOfDay } from "../../get-api-calls/get-popular-movies-of-today.js";
import { popularMoviesOfWeek } from "../../get-api-calls/get-popular-movies-of-week.js";
import { decreasePage } from "../../global/decreasing-page.js";
import { increasePage } from "../../global/increasing-page.js";

const dynamicPaginationSetup = (count = 1) => {

  if (!searchPaginationContainer) {
    return;
  }
  
  searchPaginationContainer.addEventListener('click', (ev) => {
    ev.preventDefault();

    let params = new URLSearchParams(window.location.search);
    const querySearch = params.get('query');
    const button = ev.target.closest('button');

    // For 'index.html' pagination
    if (window.location.pathname.endsWith('index.html') && querySearch) {

      if (button.classList.contains('next-page')) {

        count = increasePage(count);
        searchMovieByName(querySearch, count);
        displayAlertMessage('redirecting-next-page',count)
        return;

      } else if (button.classList.contains('previous-page')) {
        count = decreasePage(count);

        if (count <= 1) {
          count = 1;
          displayAlertMessage('cant-go-lower-than-1',count)
        }

        searchMovieByName(querySearch, count);
        return;
      }
    }

    // For 'popular-day.html' pagination
    if (window.location.pathname.endsWith('popular-day.html')) {
      if (button.classList.contains('next-page')) {
        count = increasePage(count);
        popularMoviesOfDay(count);
        return;

      } else if (button.classList.contains('previous-page')) {
        count = decreasePage(count);
        if (count <= 1) {
          count = 1;
          displayAlertMessage('cant-go-lower-than-1',count)
        }

        popularMoviesOfDay(count);
        return;
      }
    }

    // For 'popular-week.html' pagination
    if (window.location.pathname.endsWith('popular-week.html')) {
      if (button.classList.contains('next-page')) {
        count = increasePage(count);
        popularMoviesOfWeek(count);
        displayAlertMessage('redirecting-next-page',count)
        return;

      } else if (button.classList.contains('previous-page')) {
        count = decreasePage(count);
        if (count <= 1) {
          count = 1;
          displayAlertMessage("You can't go lower than 1.", "red");
        }
        popularMoviesOfWeek(count);
        return;
      }
    }
  });
};

export { dynamicPaginationSetup };
