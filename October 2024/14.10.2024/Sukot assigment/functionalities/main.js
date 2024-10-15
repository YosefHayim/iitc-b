import { apiKey, apiToken } from "./env.js";

const popularMoviesContainer = document.querySelector('.popular-movies-container')
const topRatedMoviesContainer = document.querySelector('.top-trending-movies-container')
const searchResultContainer = document.querySelector('.search-results-container')
const formData = document.querySelector('form');


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

      const movieCardDiv = document.createElement('div');
      movieCardDiv.classList.add('movie-card');
      
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
      

      popularMoviesContainer.appendChild(movieCardDiv);

      getMoviesTrailers(movie.id, movieCardDiv);
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


const searchMovies = () => {
  formData.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const inputValue = formData.querySelector('input').value.trim();
    
    if(inputValue.length === 0 || inputValue.length < 2) {
      alert('Please provide a movie name')
    } else {

      popularMoviesContainer.style.display = `none`;
      topRatedMoviesContainer.style.display = `none`;

      if (searchResultContainer.children.length > 1) {
        searchResultContainer.innerHTML = ``
      }
      
      getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`, (data) => {
        if (data.results.length === 0) {
          window.location.href = 'error404.html';
        } else {
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
            
            searchResultContainer.innerHTML += `
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
            `
          })
        }})
      }
    }
    )
  }

const resetPlaceholder = () => {
  const searchInput = document.querySelector('.input-search-bar');
  
  searchInput.addEventListener('focus', () => {
    searchInput.placeholder = ''; 
  });
  
  searchInput.addEventListener('blur', () => {
    searchInput.placeholder = 'Search movies'; 
  });
}


popularMovies();
topRatedMovies();
resetPlaceholder()
searchMovies()