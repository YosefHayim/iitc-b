import { createDomEl } from "./create-div-dom.js";
import { buildSkeletonMovieCard } from "./homepage-movie-card-skeleton.js";
// This function is building the homepage movie cards by passing the movie object from the API call.
  const buildHomeMovieCard  = (movie) => {
    // Creating a div which is essential a "card movie" for the movie
    const movieCardDiv = createDomEl()
    // Adding to the div a class .movie-card
    movieCardDiv.classList.add('movie-card');
    // Adding to it an Id that is unique for that card.
    movieCardDiv.id = `movieN-${movie.id}`;
    // Calling the skeleton function to display on the browser using DOM.
    buildSkeletonMovieCard(movie,movieCardDiv)
    return movieCardDiv;
  };

  export { buildHomeMovieCard  };
