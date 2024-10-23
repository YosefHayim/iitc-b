import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { searchPaginationContainer } from "../../DOM/storage-elements-dom.js";
import { searchMovieByName } from "../../get-api-calls/get-movie-by-name.js";
import { popularMoviesOfDay } from "../../get-api-calls/get-popular-movies-of-today.js";
import { popularMoviesOfWeek } from "../../get-api-calls/get-popular-movies-of-week.js";
import { decreasePage } from "../../global/decreasing-page.js";
import { increasePage } from "../../global/increasing-page.js";

// Handles pagination for the movie search and popular movie pages (day and week).
// Allows users to navigate between pages for movie searches and popular movies.
const dynamicPaginationSetup = (count = 1) => {
  // If the search pagination container isn't found, log an error and stop the process.
  if (!searchPaginationContainer) {
    console.error('Search container for next and prev buttons not found.');
    return;
  }

  // Add event listener for pagination buttons (next and previous).
  searchPaginationContainer.addEventListener('click', (ev) => {
    ev.preventDefault();
    const button = ev.target.closest('button'); // Identify the clicked button

    // Retrieve the query from the URL (e.g., the movie name the user searched for).
    let params = new URLSearchParams(window.location.search);
    const querySearch = params.get('query');

    // If on the 'index.html' page and performing a query search
    if (window.location.pathname.endsWith('index.html') && querySearch) {
      // Handle next page click
      if (button.classList.contains('next-page')) {
        count = increasePage(count);  // Increment the page count
        searchMovieByName(querySearch, count);  // Fetch the next page of movie results
        displayAlertMessage('redirecting-next-page', count);
        return;

      // Handle previous page click
      } else if (button.classList.contains('previous-page')) {
        count = decreasePage(count);  // Decrement the page count

        // If the page is already at 1, show an alert and prevent further decrement
        if (count === 1) {
          count = 1;
          displayAlertMessage('cant-go-lower-than-1', count);
        }
        searchMovieByName(querySearch, count);
        return;
      }
    }

    // Handle pagination for 'popular-day.html'
    if (window.location.pathname.endsWith('popular-day.html')) {
      if (button.classList.contains('next-page')) {
        count = increasePage(count);  // Increment the page count
        popularMoviesOfDay(count);  // Fetch the next page of popular movies of the day
        return;

      } else if (button.classList.contains('previous-page')) {
        count = decreasePage(count);  // Decrement the page count

        // If the page is already at 1, show an alert and prevent further decrement
        if (count <= 1) {
          count = 1;
          displayAlertMessage('cant-go-lower-than-1', count);
        }
        popularMoviesOfDay(count);
        return;
      }
    }

    // Handle pagination for 'popular-week.html'
    if (window.location.pathname.endsWith('popular-week.html')) {
      if (button.classList.contains('next-page')) {
        count = increasePage(count);  // Increment the page count
        popularMoviesOfWeek(count);  // Fetch the next page of popular movies of the week
        displayAlertMessage('redirecting-next-page', count);
        return;

      } else if (button.classList.contains('previous-page')) {
        count = decreasePage(count);  // Decrement the page count

        // If the page is already at 1, show an alert and prevent further decrement
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
