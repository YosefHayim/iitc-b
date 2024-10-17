import { getData } from "../api-functions.js";
import { apiKey } from "../env.js";
import { popularMoviesContainer, latestPopularPage } from "../dom/domEls.js";
import { createMovieCard } from "../dom/dom-movies-cards.js";

const popularMovies = (pageNumber = 1) => {
  popularMoviesContainer.innerHTML = "";

  getData(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}&api_key=${apiKey}`, (data) => {
    if (data && data.results) {
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        popularMoviesContainer.appendChild(movieCard);
      });
      latestPopularPage.style.display = `block`;
      latestPopularPage.textContent = `PAGES: ${pageNumber} / ${data.total_pages - pageNumber}`
    } else {
      console.error("No data received from the API.");
    }
  });
};

export { popularMovies };
