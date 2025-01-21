import { buildFavoriteCardSkeleton } from "./favorite-skeleton-movie-card.js";
import { createDomEl } from "./create-div-dom.js";

// Generates a favorite movie card and updates the DOM using the movie object.
const generateFavoriteMovieCard = (movie) => {
  // Create a div for each movie card.
  const movieCardDiv = createDomEl();

  // Add the class .movie-card to the div.
  movieCardDiv.classList.add("movie-card");

  // Assign an ID to identify the movie as a favorite.
  movieCardDiv.id = `favMovie-${movie.id}`;

  // Set the inner HTML by calling the skeleton function with the div and movie object.
  buildFavoriteCardSkeleton(movieCardDiv, movie);

  return movieCardDiv;
};

export { generateFavoriteMovieCard };
