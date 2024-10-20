import { getData } from "./api-functions.js";
import { accountId } from "../global/env.js";
import { favMoviesContainer } from "../DOM/storage-elements-dom.js";
import { generateFavoriteMovieCard } from "../DOM/favorite-movie-card-dom.js";

const displayFavoriteMoviesList = () => {
  // Fetch favorite movies for the account
  getData(`https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`, (data) => {
    
    if (!data) {
      redirectToErrorPage();
      return;
    }

    // Create and append movie cards for each favorite movie
    data.results.forEach(movie => {
      const movieCard = generateFavoriteMovieCard(movie);
      favMoviesContainer.appendChild(movieCard);
    });
  });
};

export { displayFavoriteMoviesList };
