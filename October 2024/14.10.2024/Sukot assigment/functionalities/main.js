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
  
  popularMoviesList.results.forEach((movie,index) => {
    movieContainer.innerHTML += `
    <div class="movie-card-container">
    <h2>${movie.original_title}<h2>
    </div>
    `    
  });

};

popularMovies();
