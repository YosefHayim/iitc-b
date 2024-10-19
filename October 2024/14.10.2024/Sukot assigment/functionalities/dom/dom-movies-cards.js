// Get the trailer of a particular movie
import { getMoviesTrailers } from "../get-api-calls/get-movies-trailer.js";

// Get the rating image based on movie rating
import { getStarRatingImage } from "../get-api-calls/get-rating-movie.js";

// Add a movie to the favorite list
import { addfavoriteMovieToList } from "../post-api-calls/post-movies-to-favorite-list.js";

// Alert the user if the action was successful
import { alertMessageContainer } from "../global/domEls.js";

// Create each movie card
const createMovieCard = (movie) => {
  const movieCardDiv = document.createElement('div');
  movieCardDiv.classList.add('movie-card');
  movieCardDiv.id = `movieN-${movie.id}`;

  // Shorten long movie titles for display
  const isMovieTitleLong = movie.original_title.split(' ').length >= 4 
    ? movie.original_title.split(' ').slice(0, 3).join(' ') 
    : movie.original_title.split(' ').slice(0, 2).join(' ');

  // Populate movie card HTML
  movieCardDiv.innerHTML = `
    <a href="" class="img-trailer-link"><img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="movie-img" class="movie-img"></a>
    <h1 class="title">${isMovieTitleLong}</h1>
    <div class="img-container">
      <img src="${getStarRatingImage(movie.vote_average)}" alt="rating-img" class="rating-img">
      <a class="play-button-btn"><img src="../images/user-activity/play-button-icon.svg" alt="play-button-icon" class="play-button-img"></a>
      <button class="white-share-trailer-btn"><img src="../images/user-activity/white-share-icon.svg" alt="white-share-img" class="white-share-img"></button>
      <button class="white-heart-trailer-btn"><img src="../images/user-activity/white-heart-icon.svg" alt="white-heart-img" class="white-heart-img"></button>
      <button class="white-data-btn"><img src="../images/user-activity/white-data-icon.svg" alt="white-data-img" class="white-data-img"></button>
      <h2 class="rating-number-txt">${(movie.vote_average ?? 0).toFixed(1)}</h2>
    </div>
  `;

  // Add trailer URL
  getMoviesTrailers(movie.id, movieCardDiv);

  // Handle "favorite" button click
  const heartButton = movieCardDiv.querySelector('.white-heart-trailer-btn');
  heartButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    alertMessageContainer.innerHTML = `Movie added to favorite picks`;
    alertMessageContainer.style.display = 'flex';
    setTimeout(() => alertMessageContainer.style.display = 'none', 3000);
    
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
      
      alertMessageContainer.textContent = `Redirecting...`;
      alertMessageContainer.style.display = 'flex';
      setTimeout(() => alertMessageContainer.style.display = 'none', 3000);

      window.location.href = `movie-data.html?movieId=${movieCardId}&videoUrl=${encodeURIComponent(videoId)}`;
    } else {
      console.error("Play button not found!");
    }
  });

  return movieCardDiv;
};

export { createMovieCard };
