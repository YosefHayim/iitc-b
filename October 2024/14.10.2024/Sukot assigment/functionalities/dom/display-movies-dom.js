import { generateFavoriteMovieCard } from "./favorite-movie-card-dom.js";
import { buildHomeMovieCard } from "./homepage-movie-cards-dom.js";
import { moviesStorage } from "./storage-movies-elements-dom.js";

const displayMovies = (requestedContainer, data) => {
  const chosenContainer = moviesStorage(requestedContainer);

  if (chosenContainer && chosenContainer.containerEl) {
    chosenContainer.containerEl.innerHTML = '';

    // Check if data has a 'results' array or is a single object
    if (Array.isArray(data.results)) {
      // If results is an array, loop through each movie
      data.results.forEach(movie => {
        let movieCard;

        if (requestedContainer === 'Favorite movie page') {
          movieCard = generateFavoriteMovieCard(movie);
        } else {
          movieCard = buildHomeMovieCard(movie);
        }

        chosenContainer.containerEl.appendChild(movieCard);
      });
    } else if (data && !data.results) {
      // Handle the case where data is a single movie object
      let movieCard;

      if (requestedContainer === 'Favorite movie page') {
        movieCard = generateFavoriteMovieCard(data); // Directly pass the movie object
      } else {
        movieCard = buildHomeMovieCard(data); // Directly pass the movie object
      }

      chosenContainer.containerEl.appendChild(movieCard);
    } else {
      console.error("No movies found in data.");
    }
  } else {
    console.error("Container not found for:", requestedContainer);
  }
};

export { displayMovies }
