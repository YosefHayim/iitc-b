import { buildFavoriteCardSkeleton } from "./favorite-skeleton-movie-card.js";
import { createDomEl } from "./create-div-dom.js";
// This function as it sounds generating the movie cards and manipulating the dom. it received as parameter the movie object
const generateFavoriteMovieCard  = (movie) => {
// We are creating a div for each movie
  const movieCardDiv = createDomEl();
  // Adding to that div the class .movie-card
  movieCardDiv.classList.add('movie-card');
  // Adding it also id of identify its a favorite movie
  movieCardDiv.id = `favMovie-${movie.id}`;
  // Creating the inner html by calling the skeleton function and passing the div itself and the movie object as well.
  buildFavoriteCardSkeleton(movieCardDiv, movie);
  return movieCardDiv;
};

export { generateFavoriteMovieCard };
