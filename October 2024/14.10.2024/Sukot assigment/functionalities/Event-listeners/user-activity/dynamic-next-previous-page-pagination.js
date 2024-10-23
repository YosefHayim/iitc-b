import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { searchPaginationContainer } from "../../DOM/storage-elements-dom.js";
import { searchMovieByName } from "../../get-api-calls/get-movie-by-name.js";
import { popularMoviesOfDay } from "../../get-api-calls/get-popular-movies-of-today.js";
import { popularMoviesOfWeek } from "../../get-api-calls/get-popular-movies-of-week.js";
import { decreasePage } from "../../global/decreasing-page.js";
import { increasePage } from "../../global/increasing-page.js";
// This function is responsible to the next and previous page on the query search of a movie. 
// Since searching for a movie provides more than 1 movie (ID not) so we attach to it pagination to allow the user to go next or previous page.
const dynamicPaginationSetup = (count = 1) => {
// If the search container isnt found we return and avoid the process. 
  if (!searchPaginationContainer) {
    console.error('Search container of next and prev buttons were not found.')
    return;
  }
  
  searchPaginationContainer.addEventListener('click', (ev) => {
    ev.preventDefault();
    // set the params from the URL object
    let params = new URLSearchParams(window.location.search);
    // Getting the query from the URL e.g. we typed in the input batman and we redirected to another page so we get the batman word.
    const querySearch = params.get('query');
    const button = ev.target.closest('button');

    // If we are at the index.html page and we have the query search
    if (window.location.pathname.endsWith('index.html') && querySearch) {
      // If the button that was clicked has the class .next-page
      if (button.classList.contains('next-page')) {
        // We are calling a function Increase page which simply receives the count as a parameter and returns it to us with one plus number.
        count = increasePage(count);
        // Calling the search by movie function with the requested page number and the query search
        searchMovieByName(querySearch, count);
        displayAlertMessage('redirecting-next-page',count)
        return;

      // Else if we preform a clicked and that was on a previous page button that we call the decreasePage function and we return the count variable -1
      } else if (button.classList.contains('previous-page')) {
        count = decreasePage(count);

        // If the user preforms a click and the page is already less than or equal to 1 than we set it to 1 and we alert the user that he cant go lower than 1.
        if (count === 1) {
          count = 1;
          displayAlertMessage('cant-go-lower-than-1',count)
        }
        // Else this was accepted and the user didnt click on previous page than is less than or equal to 1 but next page we get the next page.
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
