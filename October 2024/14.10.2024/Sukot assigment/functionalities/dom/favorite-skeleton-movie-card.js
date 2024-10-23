import { isImageNull } from "./is-image-null-dom.js";
import { isNameToLong } from "./is-movie-title-long-dom.js";
import { getStarRatingImage } from "./rating-movie-stars-img-dom.js";
import { roundMovieRating } from "./round-rating-movie-dom.js";
// This function is creating the look of the movie card on the dom, it receives two parameters the movie div and the movie object from the API
const buildFavoriteCardSkeleton = (movieCardDiv,movie) => {
  // Calling the isImageNull function to check if there is available image in the data if not we set a default image.
  const image = isImageNull(movie.poster_path);
  // Calling the isNameToLong function to check if the length of the movie is more than 3 words if so we use only two to maintain the symmetric of spaces between the cards
  const movieName = isNameToLong(movie.original_title);
  // Calling the getStarRatingImage to display the amount of stars based on the vote of the movie. e.g. movie is 2 we provide 1 star, e.g. its 4 stars we provide 8, tops is 5.
  const resultRatingImg = getStarRatingImage(movie.vote_average)

  movieCardDiv.innerHTML = `
  <a href="#" class="fav-movie-trailer-url">
  <img src="${image}" alt="movie-img" class="movie-img">
  </a>
  <h1 class="title">${movieName}</h1>
  <div class="img-container">
    <img src="${resultRatingImg}" alt="rating-img" class="rating-img">
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
  return movieCardDiv
}

export {buildFavoriteCardSkeleton}