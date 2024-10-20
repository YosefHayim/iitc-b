import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { popularMoviesContainer, latestPopularPage } from "../DOM/storage-elements-dom.js";
import { buildHomeMovieCard } from "../DOM/homepage-movie-cards-dom.js";

const fetchPopularMovies = (pageNumber = 1) => {
  // Clear container for new data
  popularMoviesContainer.innerHTML = "";

  getData(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}&api_key=${apiKey}`, (data) => {
    if (!data) {
      redirectToErrorPage();
      return;
    }

    data.results.forEach(movie => {
      const movieCard = buildHomeMovieCard(movie);
      popularMoviesContainer.appendChild(movieCard);
    });

    latestPopularPage.style.display = "block";
    latestPopularPage.textContent = `Page: ${pageNumber} / ${data.total_pages}`;
  });
};

export { fetchPopularMovies };
