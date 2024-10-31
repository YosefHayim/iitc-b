import { generateFavoriteMovieCard } from "./favorite-movie-card-dom.js";
import { buildHomeMovieCard } from "./homepage-movie-cards-dom.js";
import { moviesStorage } from "./storage-movies-elements-dom.js";

// Displays movies in the specified container.
const displayMovies = (requestedContainer, data) => {
  // Get the container from moviesStorage based on the requested container.
  const chosenContainer = moviesStorage(requestedContainer);

  // If both the container and its element exist, reset the container's HTML to avoid duplicates.
  if (chosenContainer && chosenContainer.containerEl) {
    chosenContainer.containerEl.innerHTML = "";

    // Check if data contains a 'results' array (multiple movies) or is a single object.
    if (Array.isArray(data.results)) {
      // Loop through each movie in the results array.
      data.results.forEach((movie) => {
        let movieCard;

        // If it's the favorite movie page, generate a favorite movie card.
        if (requestedContainer === "Favorite movie page") {
          movieCard = generateFavoriteMovieCard(movie);
        } else {
          // Otherwise, generate a regular movie card.
          movieCard = buildHomeMovieCard(movie);
        }
        // Append the movie card to the corresponding container.
        chosenContainer.containerEl.appendChild(movieCard);
      });
    } else if (!data.results) {
      // If data is a single movie object, handle it accordingly.
      let movieCard;

      // Generate a favorite movie card if it's the favorite movie page.
      if (requestedContainer === "Favorite movie page") {
        movieCard = generateFavoriteMovieCard(data);
      } else {
        // Otherwise, generate a regular movie card.
        movieCard = buildHomeMovieCard(data);
      }

      // Append the single movie card to the container.
      chosenContainer.containerEl.appendChild(movieCard);
    } else {
      // Log an error if no valid movies are found.
      console.error("No movies found in data.");
    }
  } else {
    // Log an error if the requested container isn't found in moviesStorage.
    console.error("Container not found for:", requestedContainer);
  }
};

export { displayMovies };
