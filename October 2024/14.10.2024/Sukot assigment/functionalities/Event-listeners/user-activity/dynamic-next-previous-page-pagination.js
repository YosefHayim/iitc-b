import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { searchPaginationContainer } from "../../DOM/storage-elements-dom.js";
import { searchMovieByName } from "../../get-api-calls/get-movie-by-name.js";
import { popularMoviesOfDay } from "../../get-api-calls/get-popular-movies-of-today.js";
import { popularMoviesOfWeek } from "../../get-api-calls/get-popular-movies-of-week.js";
import { decreasePage } from "../../global/decreasing-page.js";
import { increasePage } from "../../global/increasing-page.js";

const dynamicPaginationSetup = (count = 1) => {
  // Check if pagination container exists, log error if not
  if (!searchPaginationContainer) {
    console.error('Pagination container not found.');
    return;
  }

  // Add event listener for pagination button clicks
  searchPaginationContainer.addEventListener('click', (ev) => {
    ev.preventDefault();
    const button = ev.target.closest('button');
    if (!button) return; // Ignore clicks outside buttons

    const params = new URLSearchParams(window.location.search);
    const querySearch = params.get('query'); // Get search query from URL
    const isIndexPage = window.location.pathname.endsWith('movies-categories.html'); // Check if on index page
    const isPopularDayPage = window.location.pathname.endsWith('popular-day.html'); // Check if on popular-day page
    const isPopularWeekPage = window.location.pathname.endsWith('popular-week.html'); // Check if on popular-week page

    // Reusable pagination logic
    const handlePagination = (directionFunc, fetchFunc, pageType) => {
      count = directionFunc(count); // Update page count
      displayAlertMessage(`redirecting-${pageType}`, count); // Show alert for page change
      fetchFunc(count); // Fetch data for new page
    };

    // Handle next-page button click
    if (button.classList.contains('next-page')) {
      if (isIndexPage && querySearch) {
        handlePagination(increasePage, () => searchMovieByName(querySearch, count), 'next-page');

      } else if (isPopularDayPage) {
        handlePagination(increasePage, popularMoviesOfDay, 'next-page');

      } else if (isPopularWeekPage) {
        handlePagination(increasePage, popularMoviesOfWeek, 'next-page');
      }

    // Handle previous-page button click
    } else if (button.classList.contains('previous-page')) {
      count = decreasePage(count); // Decrease page count

      if (count < 1) {
        count = 1; // Ensure count doesn't go below 1
        displayAlertMessage("cant-go-lower-than-1", count); // Alert if page count is too low

      } else {
        if (isIndexPage && querySearch) {
          handlePagination(() => count, () => searchMovieByName(querySearch, count), 'previous-page');

        } else if (isPopularDayPage) {
          handlePagination(() => count, popularMoviesOfDay, 'previous-page');
          
        } else if (isPopularWeekPage) {
          handlePagination(() => count, popularMoviesOfWeek, 'previous-page');
        }
      }
    }
  });
};

export { dynamicPaginationSetup };
