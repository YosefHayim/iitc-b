import { displayAlertMessage } from "../../dom/alert-message-dom.js";
import { homepageTitlesContainers } from "../../dom/storage-elements-dom.js";
import { fetchCurrentlyInTheatersMovies } from "../../get-api-calls/get-total-current-movies-in-theatres.js";
import { fetchPopularMovies } from "../../get-api-calls/get-total-popular-movies.js";
import { fetchTopRatedMovies } from "../../get-api-calls/get-total-top-rated-movies.js";
import { fetchUpcomingMovies } from "../../get-api-calls/get-total-upcoming-movies.js";

// Object mapping container titles to their respective API fetching functions
const functionMap = {
  "currently-movies-in-theatres-container-title":
    fetchCurrentlyInTheatersMovies,
  "upcoming-movies-container-title": fetchUpcomingMovies,
  "popular-movies-container-title": fetchPopularMovies,
  "trending-movies-container-title": fetchTopRatedMovies,
};

// Object tracking the current page number for each container title
const pageNumbers = {
  "currently-movies-in-theatres-container-title": 1,
  "upcoming-movies-container-title": 1,
  "popular-movies-container-title": 1,
  "trending-movies-container-title": 1,
};

// Function to set up pagination for the homepage based on user interactions
const setupHomepagePagination = () => {
  // Attach click event listeners to each container's title
  homepageTitlesContainers.forEach((container) => {
    container.addEventListener("click", (ev) => {
      ev.preventDefault();

      // Determine if the user clicked the right (next) or left (previous) pagination button
      const isNextPage = ev.target.closest(".right-button");
      const isPreviousPage = ev.target.closest(".left-button");

      // Identify the container class and find the corresponding function to call
      const containerClass = Object.keys(functionMap).find((className) =>
        container.classList.contains(className)
      );
      const targetFunction = functionMap[containerClass];

      if (!targetFunction) {
        console.error("No matching function for this container.");
        return;
      }

      // Handle next page click
      if (isNextPage) {
        const currentPage = ++pageNumbers[containerClass]; // Increment the page number
        displayAlertMessage("redirecting-next-page", currentPage);

        // Handle previous page click
      } else if (isPreviousPage) {
        const currentPage = Math.max(1, --pageNumbers[containerClass]); // Decrement the page number but ensure it doesn't go below 1

        if (currentPage === 1) {
          displayAlertMessage("cant-go-lower-than-1", currentPage); // Display an alert if trying to go below page 1
        } else {
          displayAlertMessage("redirecting-previous-page", currentPage); // Display an alert for previous page navigation
        }
      }

      // Call the corresponding function with the updated page number
      targetFunction(pageNumbers[containerClass]);
    });
  });
};

export { setupHomepagePagination };
