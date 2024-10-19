import { titlesContainers } from "../dom/domEls.js";
import { currentlyInTheaters } from "../get-api-calls/get-current-movies-in-theatres.js";
import { displayFavoriteMoviesList } from "../get-api-calls/get-fav-movies-list.js";
import { searchMovieById } from "../get-api-calls/get-movie-by-id.js";
import { searchMovieByName } from "../get-api-calls/get-movie-by-name.js";
import { popularMoviesOfDay } from "../get-api-calls/get-popular-movies-of-day.js";
import { popularMoviesOfWeek } from "../get-api-calls/get-popular-movies-of-week.js";
import { popularMovies } from "../get-api-calls/get-popular-movies.js";
import { topRatedMovies } from "../get-api-calls/get-top-rated-movies.js";
import { upComingMovies } from "../get-api-calls/get-upcoming-movies.js";

// Map containers to their respective functions
const functionMap = {
  'currently-movies-in-theatres-container-title': currentlyInTheaters,
  'upcoming-movies-container-title': upComingMovies,
  'popular-movies-container-title': popularMovies,
  'trending-movies-container-title': topRatedMovies,
  'popular-of-day-container-title': popularMoviesOfDay,
  'popular-movies-of-week-container-title': popularMoviesOfWeek,
  'favorite-movies-container-title': displayFavoriteMoviesList,
};

// Store page numbers for each category
const pageNumbers = {
  'currently-movies-in-theatres-container-title': 1,
  'upcoming-movies-container-title': 1,
  'popular-movies-container-title': 1,
  'trending-movies-container-title': 1,
  'popular-of-day-container-title': 1,
  'popular-movies-of-week-container-title': 1,
  'favorite-movies-container-title': 1,
  'search-results-container-title': 1,
};

const redirectPages = () => {
  titlesContainers.forEach((container) => {
    container.addEventListener('click', (event) => {
      event.preventDefault();

      // Find which function to call based on the container's class
      const containerClass = Object.keys(functionMap).find(cls => container.classList.contains(cls));
      let targetFunction = functionMap[containerClass];

      // Call the target function if it exists
      if (targetFunction) {
        // Adjust page number based on button click
        if (event.target.closest('.right-button')) {
          pageNumbers[containerClass]++;
        } else if (event.target.closest('.left-button')) {
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

export { redirectPages };
