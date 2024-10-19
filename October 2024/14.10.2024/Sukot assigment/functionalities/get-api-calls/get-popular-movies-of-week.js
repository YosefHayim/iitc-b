import { apiKey } from "../env.js";
import { getData } from "../api-functions.js";
import { popularOfTheWeekDiv,movieCardsDivs, popWeekMoviePage } from "../dom/domEls.js";
import { createMovieCard } from "../dom/dom-movies-cards.js";

const popularMoviesOfWeek = (pageNumber = 1) => {

  getData(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${pageNumber}&api_key=${apiKey}`, (data) => {

    if (data && data.results) {
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        popularOfTheWeekDiv.appendChild(movieCard);
      });

      if (window.location.pathname.endsWith('popular-week.html')) {

      } else if (window.location.pathname.endsWith('index.html')) {
        popularOfTheWeekDiv.innerHTML = ``;
      }

      movieCardsDivs.forEach(container => {
        container.style.display = container.classList.contains('popular-movies-of-week-container') ? 'flex' : 'none';
      });

      popWeekMoviePage.style.display = `block`;
      console.log(`popularOfTheWeekDiv: ${pageNumber} / ${data.total_pages}`);
    } else {
      console.error("No data received from the API.");
    }
  });
};

export { popularMoviesOfWeek };
