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

    <div class="img-container"><img src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" alt="movie-poster-img" class="movie-poster-img"> </div>
    <div class="p-container"><p>${movie.overview}</p>
    </div>
    `    
  });

};

popularMovies();
