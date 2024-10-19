import { getMoviesTrailers } from "../get-api-calls/get-movies-trailer.js";
import { isImageNull } from "./is-image-null-dom.js";
import { isNameToLong } from "./is-movie-title-long-dom.js";
import { getStarRatingImage } from "./rating-movie-stars-img-dom.js";
import { roundMovieRating } from "./round-rating-movie-dom.js";

const createFavSkeletonCard = (movieCardDiv,movie) => {
  
  const image = isImageNull(movie.poster_path);
  const movieName = isNameToLong(movie.original_title);
  const resultRatingImg = getStarRatingImage(movie.vote_average)

  // Render the movie details using template literals
  movieCardDiv.innerHTML = `
    <img src="${image}" alt="movie-img" class="movie-img">
    <h1 class="title">${movieName}</h1>
    <div class="img-container">
    <img src="${resultRatingImg}" alt="rating-img" class="rating-img">
    <a class="fav-play-button-btn"><img src="../images/user-activity/play-button-icon.svg" alt="play-button-icon" class="fav-play-button-img"></a>
    <button class="fav-white-share-trailer-btn"><img src="../images/user-activity/white-share-icon.svg" alt="white-share-img" class="fav-white-share-img"></button>
    <button class="fav-remove-btn-icon"><img src="../images/user-activity/white-remove-icon.svg" alt="remove-btn-img" class="fav-remove-btn-img"></button>
    <button class="fav-white-data-btn"><img src="../images/user-activity/white-data-icon.svg" alt="white-data-img" class="fav-white-data-img"></button>
    <h2 class="rating-number-txt">${roundMovieRating(movie.vote_average)}</h2>
    </div>
  `;

  return movieCardDiv
}

export {createFavSkeletonCard}