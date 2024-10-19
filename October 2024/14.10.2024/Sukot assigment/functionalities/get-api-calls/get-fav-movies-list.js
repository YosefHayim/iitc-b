import { getData } from "../api-functions.js";
import {accountId} from "../env.js"
import {favMoviesContainer,alertMessageContainer} from "../dom/domEls.js"
import {removeFavMovie} from "../post-api-calls/post-remove-fav-movie.js"
import {createFavMovieCard} from "../dom/create-favorite-movie-card.js"

const displayFavoriteMoviesList = () => {
  getData(`https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`, (data) => {

    data.results.forEach((movie) => {
      const movieCard = createFavMovieCard(movie);
      favMoviesContainer.appendChild(movieCard);
    });

    favMoviesContainer.addEventListener('click', (ev) => {
      const movieCardId = ev.target.closest('.movie-card').getAttribute('id').replace(/\D/g, '');
      removeFavMovie(movieCardId);

      alertMessageContainer.style.display = 'flex';
      setTimeout(() => {
        alertMessageContainer.style.display = 'none';
      }, 3000);
      
      location.reload();
    });
  });
};

export {displayFavoriteMoviesList}