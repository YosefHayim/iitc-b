// Import function to get the rating image for movies (1 to 10)
import { createFavSkeletonCard } from "./favorite-skeleton-movie-card.js";
import { createDomEl } from "../DOM/create-div-dom.js"

// Create a favorite movie card using the movie object
const createFavMovieCard = (movie) => {

  // Create a div for the movie card and set its class and ID
  const movieCardDiv = createDomEl()
  movieCardDiv.classList.add('movie-card');
  movieCardDiv.id = `favMovie-${movie.id}`;

  // Calling the skeleton function to create the card div plus injecting the api data.
  createFavSkeletonCard(movieCardDiv,movie)
  return movieCardDiv;
};

export { createFavMovieCard };
