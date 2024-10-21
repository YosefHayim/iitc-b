import { buildFavoriteCardSkeleton } from "./favorite-skeleton-movie-card.js";
import { createDomEl } from "./create-div-dom.js";

const generateFavoriteMovieCard  = (movie) => {

  const movieCardDiv = createDomEl();
  movieCardDiv.classList.add('movie-card');
  movieCardDiv.id = `favMovie-${movie.id}`;
  buildFavoriteCardSkeleton(movieCardDiv, movie);
  
  return movieCardDiv;
};

export { generateFavoriteMovieCard };
