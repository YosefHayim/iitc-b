import { getMoviesTrailers } from "../get-api-calls/get-movies-trailer.js";
import { createDomEl } from "./create-div-dom.js";
import { buildSkeletonMovieCard } from "./homepage-movie-card-skeleton.js";

  // Create each movie card
  const buildHomeMovieCard  = (movie) => {
    const movieCardDiv = createDomEl()
    movieCardDiv.classList.add('movie-card');
    movieCardDiv.id = `movieN-${movie.id}`;

    // Building the movieCard skeleton DOM
    buildSkeletonMovieCard(movie,movieCardDiv)

    // Attaching to each movieCard the trailerURL
    getMoviesTrailers(movie.id, movieCardDiv);

  return movieCardDiv;
  };

  export { buildHomeMovieCard  };
