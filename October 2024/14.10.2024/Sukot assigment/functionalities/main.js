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

// Popular movies API call
const popularMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    data.results.forEach((movie) => {
      // Create the movie card div
      const movieCardDiv = document.createElement('div');
      movieCardDiv.classList.add('movie-card');
      
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

      // Set the inner HTML of the movie card
      movieCardDiv.innerHTML = `
        <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="movie-img" class="movie-img">
        <h1 class="title">${movie.original_title}</h1>
        <div class="img-container">
          <img src="${starRatingImage}" alt="rating-img" class="rating-img">
          <button class="play-button-btn"><img src="../images/play-button-icon.svg" alt="play-button-icon" class="play-button-img"></button>
          <h2 class="rating-number-txt">${movie.vote_average.toFixed(1)}</h2>
        </div>
        <div class="overview-container">
          <p class="overview">${movie.overview}</p>
        </div>
      `;
      

      // Append the movie card to the container
      popularMoviesContainer.appendChild(movieCardDiv);

      // Call getMoviesTrailers and pass the movie card div
      getMoviesTrailers(movie.id, movieCardDiv);
    });
  });
};

const getMoviesTrailers = (movieId, movieCardDiv) => {
  // Locate the play button within the movie card
  const playButton = movieCardDiv.querySelector('.play-button-btn');
  
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`, (data) => {
    // Use the first available trailer
    const movieTrailer = data.videos.results[0];
    if (movieTrailer) {
      // Set the click event to open the trailer link in the current tab
      playButton.addEventListener('click', () => {
        window.location.href = `https://www.youtube.com/watch?v=${movieTrailer.key}`;
      });
    }
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


