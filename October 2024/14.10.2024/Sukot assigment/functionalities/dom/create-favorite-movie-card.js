// Importing this function to algo the rating for the movies between 1 to 10
import { getStarRatingImage } from "../get-api-calls/get-rating-movie.js";

// We accepting the movie Object and for each movie the function iterating over and rendering the data from the api using template literals
  const createFavMovieCard = (movie) => {

  // each iteration we are creating a div, adding a class of .movie-card and set the its id from the API call.
  const movieCardDiv = document.createElement('div');
  movieCardDiv.classList.add('movie-card');
  movieCardDiv.id = `favMovie-${movie.id}`;

  // Rendering the API data to the DOM
  movieCardDiv.innerHTML = `
    <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="movie-img" class="movie-img">
    <h1 class="title">${movie.original_title}</h1>
    <div class="img-container">
      <img src="${getStarRatingImage(movie.vote_average)}" alt="rating-img" class="rating-img">
      <a class="play-button-btn"><img src="../images/user-activity/play-button-icon.svg" alt="play-button-icon" class="play-button-img"></a>
      <button class="white-share-trailer-btn"><img src="../images/user-activity/white-share-icon.svg" alt="white-share-img" class="white-share-img"></button>
      <button class="remove-btn-icon"><img src="../images/user-activity/white-remove-icon.svg" alt="remove-btn-img" class="remove-btn-img"></button>
      <h2 class="rating-number-txt">${movie.vote_average.toFixed(1)}</h2>
    </div>
  `;
  return movieCardDiv;
};

export {createFavMovieCard}