import { createDomEl } from "./create-div-dom.js";
import { buildSkeletonMovieCard } from "./homepage-movie-card-skeleton.js";

// Builds the homepage movie card using the movie object from the API.
const buildHomeMovieCard = (movie) => {
  // Create a div for the movie card.
  const movieCardDiv = createDomEl();

  // Add the class .movie-card to the div.
  movieCardDiv.classList.add("movie-card");

  // Assign a unique ID to the movie card.
  movieCardDiv.id = `movieN-${movie.id}`;

  // Use the skeleton function to populate the card's content.
  buildSkeletonMovieCard(movie, movieCardDiv);

  return movieCardDiv;
};

export { buildHomeMovieCard };
