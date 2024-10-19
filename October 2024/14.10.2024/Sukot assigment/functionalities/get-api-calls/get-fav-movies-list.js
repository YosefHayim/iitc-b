import { getData } from "../api-functions.js";
import { accountId } from "../env.js";
import { favMoviesContainer, alertMessageContainer } from "../global/domEls.js";
import { removeFavMovie } from "../post-api-calls/post-remove-fav-movie.js";
import { createFavMovieCard } from "../DOM/favorite-movie-card-dom.js";

const displayFavoriteMoviesList = () => {
  // Fetch the favorite movies for the account
  getData(
    `https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,(data) => {
      
      console.log(data);
    
      // Create and append a movie card for each favorite movie
      data.results.forEach((movie) => {
        const movieCard = createFavMovieCard(movie);
        favMoviesContainer.appendChild(movieCard);
      });

      // Add event listener for removing a favorite movie
      favMoviesContainer.addEventListener("click", (ev) => {
        const movieCardId = ev.target.closest(".movie-card").getAttribute("id").replace(/\D/g, ""); // Extract numeric ID from the movie card
        removeFavMovie(movieCardId);

        // Show an alert message for 3 seconds after removal
        alertMessageContainer.style.display = "flex";
        setTimeout(() => {
        alertMessageContainer.style.display = "none";
        }, 3000);

        // Reload the page to refresh the list
        location.reload();
      });
    }
  );
};

export { displayFavoriteMoviesList };
