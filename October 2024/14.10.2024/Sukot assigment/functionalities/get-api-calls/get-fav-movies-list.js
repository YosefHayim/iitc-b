import { getData } from "../api-functions.js";
import { accountId } from "../env.js";
import { favMoviesContainer, alertMessageContainer, currentPage } from "../dom/domEls.js";
import { removeFavMovie } from "../post-api-calls/post-remove-fav-movie.js";
import { createFavMovieCard } from "../dom/create-favorite-movie-card.js";

const displayFavoriteMoviesList = (pageNumber = 1) => {
  favMoviesContainer.innerHTML = "";

  getData(`https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=en-US&page=${pageNumber}&sort_by=created_at.asc`, (data) => {
    if (data && data.results) {
      data.results.forEach((movie) => {
        const movieCard = createFavMovieCard(movie);
        favMoviesContainer.appendChild(movieCard);
      });

      currentPage.style.display = `block`;
      currentPage.textContent = `${pageNumber} / ${data.total_pages - pageNumber} PAGES`;

      favMoviesContainer.addEventListener('click', (ev) => {
        const movieCardId = ev.target.closest('.movie-card').getAttribute('id').replace(/\D/g, '');
        removeFavMovie(movieCardId);
        alertMessageContainer.style.display = 'block';
        setTimeout(() => {
          alertMessageContainer.style.display = 'none';
          location.reload();
        }, 1000);
      });
    } else {
      console.error("No data received from the API.");
    }
  });
};

export { displayFavoriteMoviesList };
