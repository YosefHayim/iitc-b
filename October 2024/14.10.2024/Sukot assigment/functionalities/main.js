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
    <div class="movie-title-container"><h2>${movie.original_title}</h2></div>

    <div class="img-container"><img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="movie-poster-img" class="movie-poster-img"> </div>
    <div class="p-container"><p>${movie.overview}</p>
    <div class="buttons-container">

    <div class="like-container">
      <button class="like-button"><img src="../images/reg-heart-icon.png" alt="reg-heart-icon" class="reg-heart-icon"></button>
      <p>Like</p>
    </div>

    <div class="share-container">
      <button class="like-button"><img src="../images/share-icon.png" alt="share-icon" class="reg-share-icon"></button>
      <p>Share</p>
    </div>

    <div class="rating-container">
      <button class="like-button"><img src="../images/rate-icon.png" alt="rate-icon" class="reg-rate-icon"></button>
      <p>Rating</p>
    </div>

    </div>
    </div>
    `    
  });

};

popularMovies();
