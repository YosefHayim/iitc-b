import { isImageNull } from "./is-image-null-dom.js";
import { isNameToLong } from "./is-movie-title-long-dom.js";
import { getStarRatingImage } from "./rating-movie-stars-img-dom.js";
import { roundMovieRating } from "./round-rating-movie-dom.js";


const skeletonMovieCard = (movie,movieCardDiv) => {

  const image = isImageNull(movie.poster_path);
  const movieName = isNameToLong(movie.original_title);
  const resultRatingImg = getStarRatingImage(movie.vote_average)

  // Populate movie card HTML
  movieCardDiv.innerHTML = `
    <a href="" class="img-trailer-link"><img src="${image}" alt="movie-img" class="movie-img"></a>
    <h1 class="title">${movieName}</h1>
    <div class="img-container">
    <img src="${resultRatingImg}" alt="rating-img" class="rating-img">
    <a class="play-button-btn"><img src="../images/user-activity/play-button-icon.svg" alt="play-button-icon" class="play-button-img"></a>
    <button class="white-share-trailer-btn"><img src="../images/user-activity/white-share-icon.svg" alt="white-share-img" class="white-share-img"></button>
    <button class="white-heart-trailer-btn"><img src="../images/user-activity/white-heart-icon.svg" alt="white-heart-img" class="white-heart-img"></button>
    <button class="white-data-btn"><img src="../images/user-activity/white-data-icon.svg" alt="white-data-img" class="white-data-img"></button>
    <h2 class="rating-number-txt">${roundMovieRating(movie.vote_average)}</h2>
    </div>
  `;
  return movieCardDiv
}

export { skeletonMovieCard }