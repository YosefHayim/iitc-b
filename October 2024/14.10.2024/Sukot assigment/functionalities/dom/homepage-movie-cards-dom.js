import { getMoviesTrailers } from "../get-api-calls/get-movies-trailer.js";
import { createDomEl } from "./create-div-dom.js";
import { skeletonMovieCard } from "./movie-card-skeleton-dom.js";

  // Create each movie card
  const createMovieCard = (movie) => {
    const movieCardDiv = createDomEl()
    movieCardDiv.classList.add('movie-card');
    movieCardDiv.id = `movieN-${movie.id}`;

    // Building the movieCard skeleton DOM
    skeletonMovieCard(movie,movieCardDiv)

    // Attaching to each movieCard the trailerURL
    getMoviesTrailers(movie.id, movieCardDiv);

  return movieCardDiv;
  };

  export { createMovieCard };
