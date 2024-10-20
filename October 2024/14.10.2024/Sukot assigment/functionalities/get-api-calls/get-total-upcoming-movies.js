import { getData } from "./api-functions.js";
import { buildHomeMovieCard } from "../DOM/homepage-movie-cards-dom.js";
import { upComingMoviesContainer, upComingMoviePage } from "../DOM/storage-elements-dom.js";

const fetchUpcomingMovies = (pageNumber = 1) => {
  // Clear container for new data
  upComingMoviesContainer.innerHTML = "";

  getData(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNumber}`, (data) => {
    
    if (!data) {
      redirectToErrorPage();
      return;
    }

    data.results.forEach(movie => {
      const movieCard = buildHomeMovieCard(movie);
      upComingMoviesContainer.appendChild(movieCard);
    });

    upComingMoviePage.style.display = "block";
    upComingMoviePage.textContent = `Page: ${pageNumber} / ${data.total_pages}`;
  });
};

export { fetchUpcomingMovies };
