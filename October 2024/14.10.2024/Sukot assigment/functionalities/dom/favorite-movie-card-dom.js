// Import function to get the rating image for movies (1 to 10)
import { isImageNull } from "./is-image-null-dom.js";
import { isNameToLong } from "./is-movie-title-long-dom.js";
import { getStarRatingImage } from "./rating-movie-stars-img-dom.js"; 

// Create a favorite movie card using the movie object
const createFavMovieCard = (movie) => {

  // Create a div for the movie card and set its class and ID
  const movieCardDiv = document.createElement('div');
  movieCardDiv.classList.add('movie-card');
  movieCardDiv.id = `favMovie-${movie.id}`;

  const image = isImageNull(movie.poster_path);
  const movieName = isNameToLong(movie.original_title);
  const resultRatingImg = getStarRatingImage(movie.vote_average)
  const roundRatingFloat = movie.vote_average.toFixed(1)

  // Render the movie details using template literals
  movieCardDiv.innerHTML = `
    <img src="${image}" alt="movie-img" class="movie-img">
    <h1 class="title">${movieName}</h1>
    <div class="img-container">
    <img src="${resultRatingImg}" alt="rating-img" class="rating-img">
    <button class="remove-btn-icon"><img src="../images/user-activity/white-remove-icon.svg" alt="remove-btn-img" class="remove-btn-img"></button>
    <h2 class="rating-number-txt">${roundRatingFloat}</h2>
    </div>
  `;
  return movieCardDiv;
};

export { createFavMovieCard };
