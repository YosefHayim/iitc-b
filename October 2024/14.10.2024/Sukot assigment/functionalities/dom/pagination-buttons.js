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

let pageNumber = 1;

// Extended function mapping to handle both search by ID and by name
const functionMap = {
  'currently-movies-in-theatres-container-title': currentlyInTheaters,
  'upcoming-movies-container-title': upComingMovies,
  'popular-movies-container-title': popularMovies,
  'trending-movies-container-title': topRatedMovies,
  'popular-of-day-container-title': popularMoviesOfDay,
  'popular-movies-of-week-container-title': popularMoviesOfWeek,
  'favorite-movies-container-title': displayFavoriteMoviesList,
  'search-results-container-title-name': searchMovieByName,
  'search-results-container-title-id': searchMovieById,
};

const redirectPages = () => {
  titlesContainers.forEach((movieCarousel) => {
    movieCarousel.addEventListener('click', (ev) => {
      ev.preventDefault();

      // Identify the container class, specifically for search
      const containerClass = Array.from(movieCarousel.classList).find(cls => functionMap[cls]);
      let targetFunction = functionMap[containerClass];

      // Example of differentiating by another attribute for search by ID or name
      if (containerClass === 'search-results-container-title') {
        const searchTerm = movieCarousel.dataset.searchTerm;
        targetFunction = isNaN(searchTerm) ? searchMovieByName : searchMovieById;
      }

      if (targetFunction) {
        console.log(targetFunction);
        
        if (ev.target.closest('.right-button')) {
          console.log(++pageNumber);
          targetFunction(pageNumber);

        } else if (ev.target.closest('.left-button')) {
          console.log(++pageNumber);
          targetFunction(pageNumber);
        }
      } else {
        console.error("No matching function for this container.");
      }
    });
  });
};

export { redirectPages };
