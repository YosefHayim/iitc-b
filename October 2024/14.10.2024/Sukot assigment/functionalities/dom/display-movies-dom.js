import { generateFavoriteMovieCard } from "./favorite-movie-card-dom.js";
import { buildHomeMovieCard } from "./homepage-movie-cards-dom.js";
import { moviesStorage } from "./movies-elements-storage-dom.js";


const displayMovies = (requestedContainer, data) => {
  const chosenContainer = moviesStorage(requestedContainer);

  if (chosenContainer && chosenContainer.containerEl) {
    chosenContainer.containerEl.innerHTML = '';

    data.results.forEach(movie => {
    let movieCard;

      // Use a different card builder for favorite movies
      if (requestedContainer === 'Favorite movies page') {
        movieCard = generateFavoriteMovieCard(movie);
      } else {
        movieCard = buildHomeMovieCard(movie);
      }

      chosenContainer.containerEl.appendChild(movieCard);
    });

  } else {
    console.error("Container not found for:", requestedContainer);
  }
};

export { displayMovies }