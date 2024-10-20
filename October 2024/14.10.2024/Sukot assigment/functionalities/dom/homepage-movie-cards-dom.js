import { getMoviesTrailers } from "../get-api-calls/get-movies-trailer.js";
import { createDomEl } from "./create-div-dom.js";
import { clickDataBtn } from "../Event-listeners/user-activity/data-button-el.js";
import { heartBtnClick } from "../Event-listeners/user-activity/heart-button-el.js";
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

    //heart button listener event to add the movie to the favorite page.
    heartBtnClick(movieCardDiv)

    // data button listener event to add to the movie to the single movie page.
    clickDataBtn(movieCardDiv)

  return movieCardDiv;
  };

  export { createMovieCard };
