import { currentlyInTheaters } from "../get-api-calls/get-current-movies-in-theatres.js";
import { titlesContainers } from "../dom/domEls.js";

let pageNumber = 1;

const redirectPages = () => {
  titlesContainers.forEach((movieCarousel) => {
    movieCarousel.addEventListener('click', (ev) => {
      ev.preventDefault();

      if (ev.target.closest('.right-button')) {
        ++pageNumber;
        currentlyInTheaters(pageNumber);
        
      } else if (ev.target.closest('.left-button')) {
        --pageNumber;
        currentlyInTheaters(pageNumber);
      }
    });
  });
};

export { redirectPages };
