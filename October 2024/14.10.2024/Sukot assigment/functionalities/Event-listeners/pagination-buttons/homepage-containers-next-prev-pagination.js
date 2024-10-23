import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { homepageTitlesContainers } from "../../DOM/storage-elements-dom.js";
import { fetchCurrentlyInTheatersMovies } from "../../get-api-calls/get-total-current-movies-in-theatres.js";
import { fetchPopularMovies } from "../../get-api-calls/get-total-popular-movies.js";
import { fetchTopRatedMovies } from "../../get-api-calls/get-total-top-rated-movies.js";
import { fetchUpcomingMovies } from "../../get-api-calls/get-total-upcoming-movies.js";

// Object mapping container titles to their respective API fetching functions
const functionMap = {
  'currently-movies-in-theatres-container-title': fetchCurrentlyInTheatersMovies,
  'upcoming-movies-container-title': fetchUpcomingMovies,
  'popular-movies-container-title': fetchPopularMovies,
  'trending-movies-container-title': fetchTopRatedMovies,
};

// Object tracking the current page number for each container title
const pageNumbers = {
  'currently-movies-in-theatres-container-title': 1,
  'upcoming-movies-container-title': 1,
  'popular-movies-container-title': 1,
  'trending-movies-container-title': 1,
};

// Function to set up homepage pagination based on user interaction
const setupHomepagePagination = () => {
  // Attach click event listeners to each container
  homepageTitlesContainers.forEach((container) => {
    container.addEventListener('click', (ev) => {
      ev.preventDefault();

      // Identify the container class and the corresponding function to call
      const containerClass = Object.keys(functionMap).find(className => container.classList.contains(className));
      const targetFunction = functionMap[containerClass];       

      if (!targetFunction) {
        console.error("No matching function for this container.");
        return;
      }

      // Determine if the user clicked the right or left button
      const isNextPage = ev.target.closest('.right-button');
      const isPreviousPage = ev.target.closest('.left-button');

      // If the right button (next page) is clicked
      if (isNextPage) {
        const currentPage = ++pageNumbers[containerClass];  // Increment page number
        displayAlertMessage('redirecting-next-page', currentPage);

      // If the left button (previous page) is clicked
      } else if (isPreviousPage) {
        const currentPage = Math.max(1, --pageNumbers[containerClass]);  // Decrement but ensure the page doesn't go below 1

        if (currentPage === 1) {
          displayAlertMessage('cant-go-lower-than-1', currentPage);  // Display alert if at the first page
        } else {
          displayAlertMessage('redirecting-previous-page', currentPage);  // Display alert for previous page
        }
      }

      // Call the target function with the updated page number
      targetFunction(pageNumbers[containerClass]);
    });
  });
};

export { setupHomepagePagination };
