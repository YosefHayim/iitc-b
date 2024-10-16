import { apiKey, apiToken,accountId } from "./env.js";

const popularMoviesContainer = document.querySelector('.popular-movies-container');
const topRatedMoviesContainer = document.querySelector('.top-trending-movies-container');
const searchResultContainer = document.querySelector('.search-results-container');
const formData = document.querySelector('form');
const mainContainer = document.querySelector('main')

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
  if (vote_average < 2) {
    return "../images/one-star-icon.svg";
  } else if (vote_average < 4) {
    return "../images/two-stars-icon.svg";
  } else if (vote_average < 6) {
    return "../images/three-stars-icon.svg";
  } else if (vote_average < 8) {
    return "../images/four-stars-icon.svg";
  } else {
    return "../images/five-stars-icon.svg";
  }
};

// Function to get trailers for a movie and set href on play button
const getMoviesTrailers = (movieId, movieCardDiv) => {
  // Locate the play button within the movie card
  const playButton = movieCardDiv.querySelector('.play-button-btn');

  // Fetch movie details including videos
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`, (data) => {
    let counter = 0;
    let movieTrailer = null;

    const videos = data.videos && data.videos.results ? data.videos.results : [];

    // Try to find a valid trailer using the counter
    while (counter < videos.length) {
      movieTrailer = videos[counter] ? videos[counter] : null;
      movieTrailer = movieTrailer && movieTrailer.key ? movieTrailer : null;
      if (movieTrailer) {
        // Found a valid trailer, exit the loop
        break;
      } else {
        // Increase counter and try next trailer
        counter++;
      }
    }

    if (movieTrailer) {
      // Set the href attribute of the play button to the trailer link
      playButton.setAttribute('href', `https://www.youtube.com/watch?v=${movieTrailer.key}`);
      playButton.setAttribute('target', '_blank'); // Optional: Open in a new tab
    } else {
      // If no valid trailer is found, hide the play button
      playButton.style.display = 'none';
    }
  });
};

// Function to display popular movies
const popularMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    data.results.forEach((movie) => {
      console.log(movie);
      // Create the movie card div
      const movieCardDiv = document.createElement('div');
      movieCardDiv.classList.add('movie-card');
      movieCardDiv.id = `movieN-${movie.id}`
      // Get the star rating image
      let starRatingImage = getStarRatingImage(movie.vote_average);

      // Set the innerHTML of the movie card
      movieCardDiv.innerHTML = `
        <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="movie-img" class="movie-img">
        <h1 class="title">${movie.original_title}</h1>
        <div class="img-container">
          <img src="${starRatingImage}" alt="rating-img" class="rating-img">
          <!-- Changed button to anchor tag -->
          <a class="play-button-btn"><img src="../images/play-button-icon.svg" alt="play-button-icon" class="play-button-img"></a>
          <button class="white-share-trailer-btn"><img src="../images/white-share-icon.svg" alt="white-share-img" class="white-share-img"></button>
          <button class="white-heart-trailer-btn"><img src="../images/white-heart-icon.svg" alt="white-heart-img" class="white-heart-img"></button>
          <h2 class="rating-number-txt">${movie.vote_average.toFixed(1)}</h2>
        </div>
        <div class="overview-container">
          <p class="overview">${movie.overview}</p>
        </div>
      `;

      // Append the movie card to the popular movies container
      popularMoviesContainer.appendChild(movieCardDiv);

      // Set href link on play button
      getMoviesTrailers(movie.id, movieCardDiv);
    });
  });
};

// Function to display top-rated movies
const topRatedMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    data.results.forEach((movie) => {
      console.log(movie);
      
      // Create the movie card div
      const movieCardDiv = document.createElement('div');
      movieCardDiv.classList.add('movie-card');
      movieCardDiv.id = `movieN-${movie.id}`

      // Get the star rating image
      let starRatingImage = getStarRatingImage(movie.vote_average);

      // Set the innerHTML of the movie card
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
        <div class="overview-container">
          <p class="overview">${movie.overview}</p>
        </div>
      `;

      // Append the movie card to the top-rated movies container
      topRatedMoviesContainer.appendChild(movieCardDiv);

      // Set href link on play button
      getMoviesTrailers(movie.id, movieCardDiv);
    });
  });
};

// Function to search movies based on user input
const searchMovies = () => {
  formData.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const inputValue = formData.querySelector('input').value.trim();

    if (inputValue.length === 0 || inputValue.length < 2) {
      alert('Please provide a movie name');
    } else {
      // Hide the other movie containers
      popularMoviesContainer.style.display = 'none';
      topRatedMoviesContainer.style.display = 'none';

      // Clear the search results container
      searchResultContainer.innerHTML = '';

      // Fetch data from the search API
      getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`,
        (data) => {
          if (data.results.length === 0) {
            window.location.href = 'error404.html';
          } else {
            data.results.forEach((movie) => {
              console.log(movie);
              
              // Get the star rating image
              let starRatingImage = getStarRatingImage(movie.vote_average);

              // Create the movie card div
              const movieCardDiv = document.createElement('div');
              movieCardDiv.classList.add('movie-card');
              movieCardDiv.id = `movieN-${movie.id}`

              // Set the innerHTML of the movie card
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
                <div class="overview-container">
                  <p class="overview">${movie.overview}</p>
                </div>
              `;

              // Append the movie card to the search results container
              searchResultContainer.appendChild(movieCardDiv);

              // Set href link on play button
              getMoviesTrailers(movie.id, movieCardDiv);
            });
          }
        }
      );
    }
  });
};

// Function to reset the placeholder text in the search input
const resetPlaceholder = () => {
  const searchInput = document.querySelector('.input-search-bar');

  searchInput.addEventListener('focus', () => {
    searchInput.placeholder = '';
  });

  searchInput.addEventListener('blur', () => {
    searchInput.placeholder = 'Search movies';
  });
};

// Event delegation for like buttons
mainContainer.addEventListener('click', (ev) => {
  ev.preventDefault();
  
  // Find the closest element with an id that starts with 'movie'
  const movieElement = ev.target.closest('[id^="movie"]');
  
  if (movieElement) {
    // Remove 'movieN-' and trim any spaces to get the movie ID
    const movieId = movieElement.id.replace('movie-', '').trim();
    console.log(movieId);
    
  }
});


popularMovies();
topRatedMovies();
resetPlaceholder();
searchMovies();
