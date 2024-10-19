import { getData } from "../api-functions.js";
import { createMovieCard } from "../DOM/dom-movies-cards.js";
import { upComingMoviesContainer, upComingMoviePage } from "../global/domEls.js";

const upComingMovies = (pageNumber = 1) => {
    // For manipulating the dom and showing teh next data
  upComingMoviesContainer.innerHTML = "";

  getData(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNumber}`, (data) => {

    console.log(data);

    if (data && data.results) {
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        upComingMoviesContainer.appendChild(movieCard);
      });
      
      upComingMoviePage.style.display = `block`;
      upComingMoviePage.textContent = `Page: ${pageNumber} / ${data.total_pages}`

    } else {
      console.error("No data received from the API.");
    }
  });
};

export { upComingMovies };
