import {getMoviesTrailers} from "../get-api-calls/get-movies-trailer.js"
import {getStarRatingImage} from "../get-api-calls/get-rating-movie.js"
import {addfavoriteMovieToList} from "../post-api-calls/post-movies-to-favorite-list.js"

// Function to create movie card
const createMovieCard = (movie) => {
  // Must recreate each time a new movie card per iteration, couldn't place it in the domEl folder because it will return after one time and stop.
  const movieCardDiv = document.createElement('div');
  movieCardDiv.classList.add('movie-card');
  movieCardDiv.id = `movieN-${movie.id}`;

  const starRatingImage = getStarRatingImage(movie.vote_average);

  // in the h1 I split the title for two words only since some movie titles has more and these specifically ones effecting the symmetrical
  movieCardDiv.innerHTML = `
  <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="movie-img" class="movie-img">
  <h1 class="title">${movie.original_title.split(' ').length >= 4 ? movie.original_title.split(' ').slice(0, 3).join(' ') : movie.original_title.split(' ').slice(0, 2).join(' ')}</h1>
  <div class="img-container">

    <img src="${starRatingImage}" alt="rating-img" class="rating-img">

    <a class="play-button-btn">
    <img src="../images/user-activity/play-button-icon.svg" alt="play-button-icon" class="play-button-img">
    </a>

    <button class="white-share-trailer-btn">
    <img src="../images/user-activity/white-share-icon.svg" alt="white-share-img" class="white-share-img">
    </button>

    <button class="white-heart-trailer-btn">
    <img src="../images/user-activity/white-heart-icon.svg" alt="white-heart-img" class="white-heart-img">
    </button>

    <button class="white-data-btn">
    <img src="../images/user-activity/white-data-icon.svg" alt="white-data-img" class="white-data-img">
    </button>

    <h2 class="rating-number-txt">${(movie.vote_average ?? 0).toFixed(1)}</h2>
  </div>
`;

  
  getMoviesTrailers(movie.id, movieCardDiv);

    const heartButton = movieCardDiv.querySelector('.white-heart-trailer-btn');
    heartButton.addEventListener('click', (ev) => {
      ev.preventDefault();

      const movieCardId = ev.target.closest('.movie-card').getAttribute('id').replace(/\D/g, '');
      addfavoriteMovieToList(movieCardId);
    });
    
    const dataButton = movieCardDiv.querySelector('.white-data-btn')
    dataButton.addEventListener('click', (ev) => {
      ev.preventDefault();
    
      // Get the parent movie card div
      const movieCardDiv = ev.target.closest('.movie-card');
    
      // Find the play button anchor element inside the movie card
      const playButton = movieCardDiv.querySelector('.play-button-btn');
      
      // Check if playButton exists to avoid the error
      if (playButton) {
        const videoUrl = playButton.getAttribute('href');
        console.log(videoUrl);

        // get only the last part of the yt url
        const videoId = videoUrl.split('v=')[1];        
    
        // Get the movie card id
        const movieCardId = movieCardDiv.getAttribute('id').replace(/\D/g, '');
        console.log(movieCardId);
        
        // Redirect to movie-data page with movieId and videoUrl in URL
        window.location.href = `movie-data.html?movieId=${movieCardId}&videoUrl=${encodeURIComponent(videoId)}`;
      } else {
        console.error("Play button not found!");
      }
    });
    
    
    
  return movieCardDiv;
};

export {createMovieCard}