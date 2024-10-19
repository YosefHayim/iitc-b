import { getData } from "./api-functions.js";
import { accountId } from "../global/env.js";
import { favMoviesContainer, alertMessageContainer } from "../DOM/storage-elements-dom.js";
import { removeFavMovie } from "../post-api-calls/post-remove-fav-movie.js";
import { createFavMovieCard } from "../DOM/favorite-movie-card-dom.js";

const displayFavoriteMoviesList = () => {
  // Fetch favorite movies for the account
  getData(`https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`, (data) => {
    
    if (!data) {
      redirectToErrorPage();
      return;
    }

    // Create and append movie cards for each favorite movie
    data.results.forEach(movie => {
      const movieCard = createFavMovieCard(movie);
      favMoviesContainer.appendChild(movieCard);
    });

    // Event listener for removing a favorite movie
    favMoviesContainer.addEventListener("click", (ev) => {
      const movieCardId = ev.target.closest(".movie-card").getAttribute("id").replace(/\D/g, ""); 
      removeFavMovie(movieCardId);

      // Show alert for 3 seconds after removal
      alertMessageContainer.style.display = "flex";
      setTimeout(() => {
        alertMessageContainer.style.display = "none";
      }, 3000);

      location.reload(); // Refresh the list after removal
    });
  });
};

export { displayFavoriteMoviesList };
