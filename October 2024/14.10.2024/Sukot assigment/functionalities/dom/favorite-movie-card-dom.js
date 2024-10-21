import { buildFavoriteCardSkeleton } from "./favorite-skeleton-movie-card.js";
import { createDomEl } from "./create-div-dom.js";

// Create a favorite movie card using the movie object
const generateFavoriteMovieCard  = (movie) => {

  // Create a div for the movie card and set its class and ID
  const movieCardDiv = createDomEl();
  movieCardDiv.classList.add('movie-card');
  movieCardDiv.id = `favMovie-${movie.id}`;

  // Calling the skeleton function to create the card div plus injecting the api data
  buildFavoriteCardSkeleton(movieCardDiv, movie);

  return movieCardDiv;
};

export { generateFavoriteMovieCard };
