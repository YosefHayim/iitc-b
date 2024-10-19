  // Get the trailer of a particular movie.
  import { getMoviesTrailers } from "../get-api-calls/get-movies-trailer.js";
  // Get the rating image based on movie rating.
  import { getStarRatingImage } from "./rating-movie-stars-img-dom.js";
  // Add a movie to the favorite list
  import { addfavoriteMovieToList } from "../post-api-calls/post-movies-to-favorite-list.js";
  // Alert the user if the action was successful.
  import { alertMessageContainer } from "../global/domEls.js";
  // Checking if the image is null if yes we provide a default image.
  import {isImageNull} from "./is-image-null-dom.js"
  // Checking if the movie title is too long.
  import {isNameToLong} from "./is-movie-title-long-dom.js"
import { alertMessage } from "./alert-message-dom.js";

  // Create each movie card
  const createMovieCard = (movie) => {
    const movieCardDiv = document.createElement('div');
    movieCardDiv.classList.add('movie-card');
    movieCardDiv.id = `movieN-${movie.id}`;

    const image = isImageNull(movie.poster_path);
    const movieName = isNameToLong(movie.original_title);
    const resultRatingImg = getStarRatingImage(movie.vote_average)
    const roundRatingFloat = movie.vote_average.toFixed(1)

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
      <h2 class="rating-number-txt">${roundRatingFloat}</h2>
      </div>
    `;

    // Add trailer URL
    getMoviesTrailers(movie.id, movieCardDiv);

    // Handle "favorite" button click
    const heartButton = movieCardDiv.querySelector('.white-heart-trailer-btn');
    heartButton.addEventListener('click', (ev) => {
    ev.preventDefault();

    // Calling the alertMessage to avoid duplicated code areas
    let message = `Movie added to favorite picks`;
    alertMessage(message)

    const movieCardId = ev.target.closest('.movie-card').id.replace(/\D/g, '');
    addfavoriteMovieToList(movieCardId);
    });

    // Handle "data" button click
    const dataButton = movieCardDiv.querySelector('.white-data-btn');
    
    dataButton.addEventListener('click', (ev) => {
    ev.preventDefault();

    const movieCardDiv = ev.target.closest('.movie-card');
    const playButton = movieCardDiv.querySelector('.play-button-btn');

    if (playButton) {
      const videoUrl = playButton.getAttribute('href');
      const videoId = videoUrl.split('v=')[1];
      const movieCardId = movieCardDiv.id.replace(/\D/g, '');
      
      // Calling the alertMessage to avoid duplicated code areas
      let message = 'Redirecting...'
      alertMessage(message)

      window.location.href = `movie-data.html?movieId=${movieCardId}&videoUrl=${encodeURIComponent(videoId)}`;
    } else {
      console.error("Play button not found!");
    }
  });
  return movieCardDiv;
  };

  export { createMovieCard };
