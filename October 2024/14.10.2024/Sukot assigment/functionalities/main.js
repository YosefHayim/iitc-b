import { apiKey, apiToken } from "./env.js";

const popularMoviesContainer = document.querySelector('.popular-movies-container')
const topRatedMoviesContainer = document.querySelector('.trending-movies-container')

const getData = async (url, cb) => {
  const get = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiToken}`
    }
  };

  try {
    const response = await fetch(url, get);
    const data = await response.json();
    cb(data);
  } catch (err) {
    console.error(err);
  }
};

const postData = async (url,cb) => {
  const post = {
    method:"POST",
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`
    }
  }

  try {
    const response = await fetch(url, get);
    const data = await response.json();
    cb(data);
  } catch (err) {
    console.error(err);
  }
};

// Popular movies API call
const popularMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    data.results.forEach((movie) => {
      popularMoviesContainer.innerHTML += `
        <div class="movie-card">
        <h1 class="title">${movie.original_title}</h1>
        <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="movie-img" class="movie-img">
        <p class="overview">${movie.overview}</p>
        <p class="score">Rate:${movie.vote_average}</p>
        </div>
      `;
    });
  });
};



// Top rated movies API call
const topRatedMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    data.results.forEach((movie) => {
      topRatedMoviesContainer.innerHTML += `
        <div class="movie-card">
        <h1 class="title">${movie.original_title}</h1>
        <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="movie-img" class="movie-img">
        <p class="overview">${movie.overview}</p>
        <p class="score">Rate:${movie.vote_average}</p>
        </div>
      `;
    });
  });
};

popularMovies();
topRatedMovies();


