import { createDomEl } from "./create-div-dom.js";
import { buildSkeletonMovieCard } from "./homepage-movie-card-skeleton.js";

  // Create each movie card
  const buildHomeMovieCard  = (movie) => {
    const movieCardDiv = createDomEl()
    movieCardDiv.classList.add('movie-card');
    movieCardDiv.id = `movieN-${movie.id}`;

    // Building the movieCard skeleton DOM
    buildSkeletonMovieCard(movie,movieCardDiv)

  return movieCardDiv;
  };

  export { buildHomeMovieCard  };
