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

      // Determine the correct star rating image based on vote_average
      let starRatingImage;
      if (movie.vote_average < 2) {
        starRatingImage = "../images/one-star-icon.svg";
      } else if (movie.vote_average < 4) {
        starRatingImage = "../images/two-stars-icon.svg";
      } else if (movie.vote_average < 6) {
        starRatingImage = "../images/three-stars-icon.svg";
      } else if (movie.vote_average < 8) {
        starRatingImage = "../images/four-stars-icon.svg";
      } else {
        starRatingImage = "../images/five-stars-icon.svg";
      }

      popularMoviesContainer.innerHTML += `
        <div class="movie-card">
          <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="movie-img" class="movie-img">
          <h1 class="title">${movie.original_title}</h1>

          <div class="img-container">
          <img src="${starRatingImage}" alt="rating-img" class="rating-img">
          <h2 class="rating-number-txt">${movie.vote_average.toFixed(1)}</h2>
          </div>

          <div class="overview-container">
            <p class="overview">${movie.overview}</p>
          </div>
        </div>
      `;
    });
  });
};



// Top rated movies API call
const topRatedMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    data.results.forEach((movie) => {

      // Determine the correct star rating image based on vote_average
      let starRatingImage;
      if (movie.vote_average < 2) {
        starRatingImage = "../images/one-star-icon.svg";
      } else if (movie.vote_average < 4) {
        starRatingImage = "../images/two-stars-icon.svg";
      } else if (movie.vote_average < 6) {
        starRatingImage = "../images/three-stars-icon.svg";
      } else if (movie.vote_average < 8) {
        starRatingImage = "../images/four-stars-icon.svg";
      } else {
        starRatingImage = "../images/five-stars-icon.svg";
      }

      topRatedMoviesContainer.innerHTML += `
        <div class="movie-card">
          <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="movie-img" class="movie-img">
          <h1 class="title">${movie.original_title}</h1>

          <div class="img-container">
          <img src="${starRatingImage}" alt="rating-img" class="rating-img">
          <h2 class="rating-number-txt">${movie.vote_average.toFixed(1)}</h2>
          
          </div>
          <div class="overview-container">
            <p class="overview">${movie.overview}</p>
          </div>
        </div>
      `;
    });
  });
};


popularMovies();
topRatedMovies();


