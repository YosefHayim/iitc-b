import { homepageTitlesContainers } from "../../DOM/storage-elements-dom.js";
import { fetchCurrentlyInTheatersMovies } from "../../get-api-calls/get-total-current-movies-in-theatres.js";
import { fetchPopularMovies } from "../../get-api-calls/get-total-popular-movies.js";
import { fetchTopRatedMovies } from "../../get-api-calls/get-total-top-rated-movies.js";
import { fetchUpcomingMovies } from "../../get-api-calls/get-total-upcoming-movies.js";

// Map containers to their respective functions
const functionMap = {
  'currently-movies-in-theatres-container-title': fetchCurrentlyInTheatersMovies,
  'upcoming-movies-container-title': fetchUpcomingMovies,
  'popular-movies-container-title': fetchPopularMovies,
  'trending-movies-container-title': fetchTopRatedMovies,
};

// Store page numbers for each category
const pageNumbers = {
  'currently-movies-in-theatres-container-title': 1,
  'upcoming-movies-container-title': 1,
  'popular-movies-container-title': 1,
  'trending-movies-container-title': 1,
};

const setupHomepagePagination = () => {
  homepageTitlesContainers.forEach((container) => {
    container.addEventListener('click', (ev) => {
      ev.preventDefault();

      // Find which function to call based on the container's class
      const containerClass = Object.keys(functionMap).find(cls => container.classList.contains(cls));
      let targetFunction = functionMap[containerClass];

      // Call the target function if it exists
      if (targetFunction) {
        // Adjust page number based on button click
        if (ev.target.closest('.right-button')) {
          pageNumbers[containerClass]++;
        } else if (ev.target.closest('.left-button')) {
          pageNumbers[containerClass] = Math.max(1, pageNumbers[containerClass] - 1);
        }

        // Execute the function with the updated page number
        targetFunction(pageNumbers[containerClass]);
      } else {
        console.error("No matching function for this container.");
      }
    });
  });
};

export { setupHomepagePagination };
