import { APIKEY } from "./env.js";
const movieContainer = document.querySelector('.movies-container')

const popularMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
  }

  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${APIKEY}`, options);
  const popularMoviesList = await response.json();
  console.log(popularMoviesList);
  
  popularMoviesList.results.forEach((movie) => {
    movieContainer.innerHTML += `
    <div class="movie-card-container">
    
    <div class="img-container"><img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="movie-poster-img" class="movie-poster-img"> </div>
    <div class="movie-title-container"><h2>${movie.original_title}</h2></div>
    <div class="p-container">
    <p class="movie-data">${movie.overview}</p>
    <div class="buttons-container">

    <div class="like-container">
      <button class="like-button"><img src="../images/reg-icons/reg-heart-icon.png" alt="reg-heart-icon" class="reg-heart-icon"></button>
      <p class="btn-text">Like</p>
    </div>

    <div class="share-container">
      <button class="share-button"><img src="../images/reg-icons/reg-share-icon.png" alt="share-icon" class="reg-share-icon"></button>
      <p class="btn-text">Share</p>
    </div>

    <div class="rating-container">
      <button class="rating-button"><img src="../images/reg-icons/reg-rate-icon.png" alt="rate-icon" class="reg-rating-icon"></button>
      <p class="btn-text">Rating</p>
    </div>

    </div>
    </div>
    `    
  });

};

popularMovies();
