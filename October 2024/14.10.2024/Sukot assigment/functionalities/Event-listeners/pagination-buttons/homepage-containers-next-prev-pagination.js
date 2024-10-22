import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { homepageTitlesContainers } from "../../DOM/storage-elements-dom.js";
import { fetchCurrentlyInTheatersMovies } from "../../get-api-calls/get-total-current-movies-in-theatres.js";
import { fetchPopularMovies } from "../../get-api-calls/get-total-popular-movies.js";
import { fetchTopRatedMovies } from "../../get-api-calls/get-total-top-rated-movies.js";
import { fetchUpcomingMovies } from "../../get-api-calls/get-total-upcoming-movies.js";

const functionMap = {
  'currently-movies-in-theatres-container-title': fetchCurrentlyInTheatersMovies,
  'upcoming-movies-container-title': fetchUpcomingMovies,
  'popular-movies-container-title': fetchPopularMovies,
  'trending-movies-container-title': fetchTopRatedMovies,
};

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

      const containerClass = Object.keys(functionMap).find(cls => container.classList.contains(cls));
      let targetFunction = functionMap[containerClass];

      if (targetFunction) {
        if (ev.target.closest('.right-button')) {
          let currentPage = pageNumbers[containerClass]++;
          displayAlertMessage('redirecting-next-page',currentPage)

        } else if (ev.target.closest('.left-button')) {
          let currentPage = pageNumbers[containerClass] = Math.max(1, pageNumbers[containerClass] - 1);
          if (currentPage === 1) {
            displayAlertMessage('cant-go-lower-than-1',currentPage)
            return

          } else {
            displayAlertMessage('redirecting-previous-page',currentPage)
          }
        }
        targetFunction(pageNumbers[containerClass]);
      } else {
        console.error("No matching function for this container.");
      }
    });
  });
};

export { setupHomepagePagination };
