// File path: /your-folder/script.js
import { apiKey, apiToken, accountId } from "./env.js";

const upComingMoviesContainer = document.querySelector('.upcoming-movies-container');
const popularMoviesContainer = document.querySelector('.popular-movies-container');
const topRatedMoviesContainer = document.querySelector('.top-trending-movies-container');
const searchResultContainer = document.querySelector('.search-results-container');
const theatresContainer = document.querySelector('.currently-movies-in-theatres-container')
const searchInput = document.querySelector('.input-search-bar');
const whiteGlassSearch = document.querySelector('.white-search-bar')
const formData = document.querySelector('form');
const movieCard = document.querySelectorAll('.movie-card')

// Function to fetch data from the API
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

// Function to get the star rating image based on vote_average
const getStarRatingImage = (vote_average) => {
  if (vote_average < 2) return "../images/one-star-icon.svg";
  else if (vote_average < 4) return "../images/two-stars-icon.svg";
  else if (vote_average < 6) return "../images/three-stars-icon.svg";
  else if (vote_average < 8) return "../images/four-stars-icon.svg";
  else return "../images/five-stars-icon.svg";
};

// Function to create movie card
const createMovieCard = (movie) => {
  const movieCardDiv = document.createElement('div');
  movieCardDiv.classList.add('movie-card');
  movieCardDiv.id = `movieN-${movie.id}`;

  const starRatingImage = getStarRatingImage(movie.vote_average);

  movieCardDiv.innerHTML = `
    <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="movie-img" class="movie-img">
    <h1 class="title">${movie.original_title}</h1>
    <div class="img-container">
      <img src="${starRatingImage}" alt="rating-img" class="rating-img">
      <a class="play-button-btn"><img src="../images/play-button-icon.svg" alt="play-button-icon" class="play-button-img"></a>
      <button class="white-share-trailer-btn"><img src="../images/white-share-icon.svg" alt="white-share-img" class="white-share-img"></button>
      <button class="white-heart-trailer-btn"><img src="../images/white-heart-icon.svg" alt="white-heart-img" class="white-heart-img"></button>
      <h2 class="rating-number-txt">${movie.vote_average.toFixed(1)}</h2>
    </div>
  `;

  getMoviesTrailers(movie.id, movieCardDiv);
  return movieCardDiv;
};

// Function to get trailers for a movie and set href on play button
const getMoviesTrailers = (movieId, movieCardDiv) => {
  const playButton = movieCardDiv.querySelector('.play-button-btn');
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`, (data) => {
    const video = data.videos?.results?.find(vid => vid.key);
    
    if (video) {
      playButton.setAttribute('href', `https://www.youtube.com/watch?v=${video.key}`);
    } else {
      playButton.style.display = 'none';
    }
  });
};

// Function to display popular movies
const popularMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      popularMoviesContainer.appendChild(movieCard);
    });
  });
};

// Function to display top-rated movies
const topRatedMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      topRatedMoviesContainer.appendChild(movieCard);
    });
  });
};

// Function to search movies based on user input
const searchMovies = () => {
  formData.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const inputValue = formData.querySelector('input').value.trim();
    if (inputValue.length >= 2) {
      popularMoviesContainer.style.display = 'none';
      topRatedMoviesContainer.style.display = 'none';
      searchResultContainer.innerHTML = '';
      getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`, (data) => {
        if (data.results.length === 0) {
          window.location.href = 'error404.html';
        } else {
          data.results.forEach((movie) => {
            const movieCard = createMovieCard(movie);
            searchResultContainer.appendChild(movieCard);
          });
        }
      });
    } else {
      alert('Please provide a movie name');
    }
  });
};

// Function to reset the placeholder text in the search input
const resetPlaceholder = () => {
  searchInput.addEventListener('focus', () => {
    searchInput.placeholder = '';
    whiteGlassSearch.style.display = 'none'; // Hide whiteGlassSearch on focus
  });

  searchInput.addEventListener('blur', () => {
    searchInput.placeholder = 'Search movies';
    whiteGlassSearch.style.display = 'block'; // Show whiteGlassSearch on blur
  });
};

const upComingMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, (data) => {
    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      upComingMoviesContainer.appendChild(movieCard);
    });
  });
};

const currentlyInTheaters = () => {
  getData(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, (data) => {
    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      theatresContainer.appendChild(movieCard);
    });
  });
};

document.addEventListener('click', (ev) => {
  ev.preventDefault();

  const shareButton = ev.target.closest('.white-share-trailer-btn');
  if (shareButton) {
    console.log("Share button clicked!");
  }
});

resetPlaceholder();
searchMovies();
upComingMovies();
topRatedMovies();
popularMovies();
currentlyInTheaters()