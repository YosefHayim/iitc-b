import { createFavSkeletonCard } from "./favorite-skeleton-movie-card.js";
import { createDomEl } from "../DOM/create-div-dom.js";
import { getMoviesTrailers } from "../get-api-calls/get-movies-trailer.js";

// Create a favorite movie card using the movie object
const createFavMovieCard = (movie) => {
  // Create a div for the movie card and set its class and ID
  const movieCardDiv = createDomEl();
  movieCardDiv.classList.add('movie-card');
  movieCardDiv.id = `favMovie-${movie.id}`;

  // Calling the skeleton function to create the card div plus injecting the api data
  createFavSkeletonCard(movieCardDiv, movie);
  
  getMoviesTrailers(movie.id, movieCardDiv);

  return movieCardDiv;
};

export { createFavMovieCard };
