import { getData } from "../api-functions.js";
import { apiKey } from "../env.js";
import { popularMoviesContainer, latestPopularPage } from "../global/domEls.js";
import { createMovieCard } from "../DOM/dom-movies-cards.js";

const popularMovies = (pageNumber = 1) => {
    // For manipulating the dom and showing teh next data
  popularMoviesContainer.innerHTML = "";

  getData(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}&api_key=${apiKey}`, (data) => {

    console.log(data);

    if (data && data.results) {
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        popularMoviesContainer.appendChild(movieCard);
      });

      latestPopularPage.style.display = `block`;
      latestPopularPage.textContent = `Page: ${pageNumber} / ${data.total_pages}`
      
    } else {
      console.error("No data received from the API.");
    }
  });
};

export { popularMovies };
