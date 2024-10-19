import { getData } from "../api-functions.js";
import { apiKey } from "../env.js";
import { topRatedMoviesContainer, topTrendingPage } from "../dom/domEls.js";
import { createMovieCard } from "../dom/dom-movies-cards.js";

const topRatedMovies = (pageNumber = 1) => {
  topRatedMoviesContainer.innerHTML = "";

  getData(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNumber}&api_key=${apiKey}`, (data) => {
    
    if (data && data.results) {
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        topRatedMoviesContainer.appendChild(movieCard);
      });

      topTrendingPage.style.display = `block`;
      topTrendingPage.textContent = `Page: ${pageNumber} / ${data.total_pages - pageNumber}`
 
    } else {
      console.error("No data received from the API.");
    }
  });
};

export { topRatedMovies };
