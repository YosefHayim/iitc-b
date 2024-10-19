// Responsible for getting the trailer of particular movie.
import {getMoviesTrailers} from "../get-api-calls/get-movies-trailer.js"

// Responsible for the condition of the movie rating.
import {getStarRatingImage} from "../get-api-calls/get-rating-movie.js"

// Responsible for adding a movie into the favorite list
import {addfavoriteMovieToList} from "../post-api-calls/post-movies-to-favorite-list.js"

// Responsible for alerting user if the action was successfully.
import { alertMessageContainer } from "./domEls.js";

// Responsible to create each movie card
const createMovieCard = (movie) => {
  // Must recreate each time a new movie card per iteration, couldn't place it in the domEl folder because it will return after one time and stop.
  const movieCardDiv = document.createElement('div');
  movieCardDiv.classList.add('movie-card');
  movieCardDiv.id = `movieN-${movie.id}`;

  // Checking if the movie title has 4 or more words by counting spaces in the title. 
  // If true (4 or more words), we take the first 3 words. Otherwise, we take the first 2 words.
  // For example, "The Lord of the Rings" (4 words) returns "The Lord of the", while "Inception" (1 word) returns "Inception".
  const isMovieTitleLong = movie.original_title.split(' ').length >= 4 ? movie.original_title.split(' ').slice(0, 3).join(' ') : movie.original_title.split(' ').slice(0, 2).join(' ');

  // Rendering the API data object into the dom.
  movieCardDiv.innerHTML = `
  <a href="" class="img-trailer-link"><img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="movie-img" class="movie-img"></a>

  <h1 class="title">${isMovieTitleLong}</h1>
  <div class="img-container">

  <img src="${getStarRatingImage(movie.vote_average)}" alt="rating-img" class="rating-img">

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

  // Calling the function so we add to movieCardDiv a trailer URL 
  getMoviesTrailers(movie.id, movieCardDiv);

    // Event listener for the Heart button icon and what happens when user preform a click on it.
    const heartButton = movieCardDiv.querySelector('.white-heart-trailer-btn');
    heartButton.addEventListener('click', (ev) => {
      ev.preventDefault();

      // Manipulate the text on the alertMessageContainer by alerting the user adding the item to the favorite picks successfully worked.
      alertMessageContainer.innerHTML = `Movie added to favorite picks`
      alertMessageContainer.style.display = 'flex';
      setTimeout(() => {
        alertMessageContainer.style.display = 'none';
      }, 3000);
      
    // When the user clicks the button, we find the closest .movie-card element.
    // Then, we get its ID (e.g., movieN-1125510) and remove all non-numeric characters, leaving only the numbers.
    const movieCardId = ev.target.closest('.movie-card').getAttribute('id').replace(/\D/g, '');
      addfavoriteMovieToList(movieCardId);
    });
    
    // direct to movie cast and data
    const dataButton = movieCardDiv.querySelector('.white-data-btn')

    dataButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    const movieCardDiv = ev.target.closest('.movie-card');
      
    // After we targeting the closest .movie-card which is the father container we than locate the button with the class play-button-btn
    const playButton = movieCardDiv.querySelector('.play-button-btn');
      
    // Check if playButton exists to avoid the error
    if (playButton) {
      // Instead of creating an additional api call we just get the href from that button because its already has the link to the youtube movie trailer.
      const videoUrl = playButton.getAttribute('href');
      console.log(videoUrl);

      // get only the last part of the youtube URL
      const videoId = videoUrl.split('v=')[1];        
  
      // Get the movie card id, we must relocate it again 
      const movieCardId = movieCardDiv.getAttribute('id').replace(/\D/g, '');
      console.log(movieCardId);

      alertMessageContainer.textContent = `Redirecting...`;
      alertMessageContainer.style.display = 'flex';
  
        setTimeout(() => {
          alertMessageContainer.style.display = 'none';
        }, 3000);
        
        // Redirect to movie-data page with movieId and videoUrl in URL as a query, didn't found any alternative approach that will work better.
        window.location.href = `movie-data.html?movieId=${movieCardId}&videoUrl=${encodeURIComponent(videoId)}`;
        
      } else {
        console.error("Play button not found!");
      }
    });
    
    
    
  return movieCardDiv;
};

export {createMovieCard}