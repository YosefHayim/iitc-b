import { isImageNull } from "./is-image-null-dom.js";
import { isNameToLong } from "./is-movie-title-long-dom.js";
import { getStarRatingImage } from "./rating-movie-stars-img-dom.js";
import { roundMovieRating } from "./round-rating-movie-dom.js";

// Builds the structure and content of a favorite movie card in the DOM using the provided movie div and movie object.
const buildFavoriteCardSkeleton = (movieCardDiv, movie) => {
  // Check if the movie has a valid poster image; set a default image if not.
  const image = isImageNull(movie.poster_path);

  // Check if the movie title is longer than 3 words; shorten if necessary for better layout.
  const movieName = isNameToLong(movie.original_title);

  // Get the appropriate star rating image based on the movie's average rating (e.g., 2 = 1 star, 4 = 2 stars).
  const resultRatingImg = getStarRatingImage(movie.vote_average);

  // Set the inner HTML of the movie card, including image, title, rating, and action buttons.

  movieCardDiv.innerHTML = `
  <a href="#" class="fav-movie-trailer-url">
  <img src="${image}" alt="movie-img" class="movie-img">
  </a>
  <h1 class="title">${movieName}</h1>
  <div class="img-container">
  <p class="rating-stars">${resultRatingImg}</p>
  <a class="fav-play-button-btn" href="#">
      <img src="../images/user-activity/play-button-icon.svg" alt="play-button-icon" class="fav-play-button-img">
    </a>
    <a class="fav-white-share-trailer-btn" href="#">
      <img src="../images/user-activity/white-share-icon.svg" alt="white-share-img" class="fav-white-share-img">
    </a>
    <button class="fav-remove-btn-icon"><img src="../images/user-activity/white-remove-icon.svg" alt="remove-btn-img" class="fav-remove-btn-img"></button>
    <button class="fav-white-data-btn"><img src="../images/user-activity/white-data-icon.svg" alt="white-data-img" class="fav-white-data-img"></button>
    <h2 class="rating-number-txt">${roundMovieRating(movie.vote_average)}</h2>
  </div>
  `;
  return movieCardDiv;
};

export { buildFavoriteCardSkeleton };
