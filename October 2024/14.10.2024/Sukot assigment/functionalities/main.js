// File path: /your-folder/script.js
import { apiKey, apiToken, accountId } from "./env.js";

// Updated selectors to select all relevant elements
const dropDownMenu = document.querySelector('.dropdown-content')
const domTitleTxt = document.querySelector('.currently-movies-in-theatres-container-title');
const logo = document.querySelector('.logo-icon')
const burgerIcon = document.querySelector('.white-burger-icon')
const favMoviesContainer = document.querySelector('.fav-movies-container')
const upComingMoviesContainer = document.querySelector('.upcoming-movies-container');
const popularMoviesContainer = document.querySelector('.popular-movies-container');
const topRatedMoviesContainer = document.querySelector('.top-trending-movies-container');
const searchResultContainer = document.querySelector('.search-results-container');
const theatresContainer = document.querySelector('.currently-movies-in-theatres-container');
const searchInputs = document.querySelectorAll('.input-search-bar');
const whiteGlassSearches = document.querySelectorAll('.white-search-bar');
const formData = document.querySelectorAll('form');
const titlesContainers = document.querySelectorAll('.trending-movies-container-title, .upcoming-movies-container-title, .popular-movies-container-title');
const popularOfTheDayDiv = document.querySelector('.popular-of-day-container')

const burgerIconActivate = () => {
  burgerIcon.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (burgerIcon.src.includes("white-remove-icon.svg")) {
      burgerIcon.src = "../images/white-burger-icon.svg";
    } else {
      burgerIcon.src = "../images/white-remove-icon.svg";
    }
  });
}
burgerIconActivate()

// const logoRedirectHome = () => {
//   logo.addEventListener('click', (ev) => {
//     ev.preventDefault();
//     window.location.href = "../pages/index.html"  
//   })
// }
// logoRedirectHome()


dropDownMenu.addEventListener('click', (ev) => {
  ev.preventDefault()

  const pageClicked = ev.target.closest('a').textContent
  if (pageClicked === 'Popular of the Day') {
    getData(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`, (data) => {
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        popularOfTheDayDiv.appendChild(movieCard);

        titlesContainers.forEach(title => title.style.display = 'none');
        domTitleTxt.style.cssText = `
          margin-bottom: 2em;
          border-radius: 3em;
          letter-spacing: 0em;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #ff0000a1;
          width: 100%;
          text-align: center;
          line-height: 0em;
          box-shadow: 0em 0em 0em 0em;
          font-size: 1.5em;
        `;

        domTitleTxt.textContent = `POPULAR MOVIES OF TODAY`
        upComingMoviesContainer.style.display = 'none';
        theatresContainer.style.display = 'none';
        popularMoviesContainer.style.display = 'none';
        topRatedMoviesContainer.style.display = 'none';
      });
    });
  } else {
    getData(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${apiKey}`, (data) => {
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        popularOfTheDayDiv.appendChild(movieCard);

        titlesContainers.forEach(title => title.style.display = 'none');
        domTitleTxt.style.cssText = `
          margin-bottom: 2em;
          border-radius: 3em;
          letter-spacing: 0em;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #ff0000a1;
          width: 100%;
          text-align: center;
          line-height: 0em;
          box-shadow: 0em 0em 0em 0em;
          font-size: 1.5em;
        `;

        domTitleTxt.textContent = `POPULAR MOVIES OF THE WEEK`
        upComingMoviesContainer.style.display = 'none';
        theatresContainer.style.display = 'none';
        popularMoviesContainer.style.display = 'none';
        topRatedMoviesContainer.style.display = 'none';
      });
  })
  }
})

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

const postData = async (url, cb, favMovie) => {
  const post = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiToken}`
    },
    body: JSON.stringify(favMovie)
  };

  try {
    const response = await fetch(url, post);
    if (!response.ok) throw new Error(`Error: ${response.status} - ${response.statusText}`);
    const data = await response.json();
    cb(data);
  } catch (err) {
    console.error('Failed to post favorite movie:', err);
  }
};

// Function to get the star rating image based on vote_average
const getStarRatingImage = (vote_average) => {
  if (vote_average < 2) return "../images/one-star-icon.svg";
  else if (vote_average < 4) return "../images/user-activity/two-stars-icon.svg";
  else if (vote_average < 6) return "../images/user-activity/three-stars-icon.svg";
  else if (vote_average < 8) return "../images/user-activity/four-stars-icon.svg";
  else return "../images/user-activity/five-stars-icon.svg";
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
      <a class="play-button-btn"><img src="../images/user-activity/play-button-icon.svg" alt="play-button-icon" class="play-button-img"></a>
      <button class="white-share-trailer-btn"><img src="../images/user-activity/white-share-icon.svg" alt="white-share-img" class="white-share-img"></button>
      <button class="white-heart-trailer-btn"><img src="../images/user-activity/white-heart-icon.svg" alt="white-heart-img" class="white-heart-img"></button>
      <h2 class="rating-number-txt">${movie.vote_average.toFixed(1)}</h2>
    </div>
  `;
  
  getMoviesTrailers(movie.id, movieCardDiv);

    // Add the event listener to the white-heart-trailer-btn
    const heartButton = movieCardDiv.querySelector('.white-heart-trailer-btn');
    heartButton.addEventListener('click', (ev) => {
      ev.preventDefault();
      const movieCardId = ev.target.closest('.movie-card').getAttribute('id').replace(/\D/g, '');
      addfavoriteMovieToList(movieCardId);
    
      const imgContainer = ev.target.closest('.img-container');
      const favoriteImgGif = document.createElement('img');
      favoriteImgGif.src = "../images/user-activity/favorite-reaction.gif";
      favoriteImgGif.alt = "favorite-effect-img";
      favoriteImgGif.classList.add('favorite-effect-img');
      
      imgContainer.appendChild(favoriteImgGif);
      favoriteImgGif.style.display = "block";
    
      setTimeout(() => {
        favoriteImgGif.style.display = "none";
        imgContainer.removeChild(favoriteImgGif); // remove the img after display
      }, 2000);
    });
    
  return movieCardDiv;
};

const createFavMovieCard = (movie) => {
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
      <button class="remove-btn-icon"><img src="../images/white-remove-icon.svg" alt="remove-btn-img" class="remove-btn-img"></button>
      <h2 class="rating-number-txt">${movie.vote_average.toFixed(1)}</h2>
    </div>
  `;
  return movieCardDiv
}

// Function to get trailers for a movie, set href on play and share button, and copy trailer URL on click
const getMoviesTrailers = (movieId, movieCardDiv) => {
  const playButton = movieCardDiv.querySelector('.play-button-btn');
  const shareButton = movieCardDiv.querySelector('.white-share-trailer-btn');
  
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`, (data) => {
    const video = data.videos?.results?.find(vid => vid.key);
    
    if (video) {
      const trailerUrl = `https://www.youtube.com/watch?v=${video.key}`;
      playButton.setAttribute('href', trailerUrl);
      
      // Set href for the share button and add click event to copy URL
      shareButton.setAttribute('href', trailerUrl);
      shareButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents navigation
        navigator.clipboard.writeText(trailerUrl)
          .then(() => {
            alert('Trailer URL copied');
          })
          .catch(err => console.error('Failed to copy trailer URL', err));
      });
    } else {
      playButton.style.display = 'none';
      shareButton.style.display = 'none'; // Hide the share button if there's no trailer
    }
  });
};

// Function to add the liked movie to tmdb for personal user experience
const addfavoriteMovieToList = (movieCardId) => {
  const favMovie = {
    media_type: 'movie',
    media_id: movieCardId,
    favorite: true
  };

  postData(`https://api.themoviedb.org/3/account/${accountId}/favorite`, (data) => {
    console.log(data);
  }, favMovie);
};

// Function to display favorite movies on favorite page
const displayFavoriteMoviesList = () => {
  getData(`https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`, (data) => {
      data.results.forEach((movie) => {
      const movieCard = createFavMovieCard(movie);
      favMoviesContainer.appendChild(movieCard);

      favMoviesContainer.addEventListener('click', (ev) => {
        const movieCardId = ev.target.closest('.movie-card').getAttribute('id').replace(/\D/g, '');
        removeFavMovie(movieCardId)
        location.reload()
        
      })
    });
  });
};

// Function to remove favorite movie from the list
const removeFavMovie = (movieCardId) => {
  const favMovie = {
    media_type: 'movie',
    media_id: movieCardId,
    favorite: false
  };

  postData(`https://api.themoviedb.org/3/account/${accountId}/favorite`, (data) => {
    console.log(data);
  }, favMovie);
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


if (window.location.pathname.endsWith('favorite.html')) {
  displayFavoriteMoviesList()
}

// Function to search movies based on user input
const searchMovies = () => {
  formData.forEach(form => {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const inputValue = form.querySelector('input').value.trim();

      if (/^[a-zA-Z]+$/.test(inputValue)) {
        titlesContainers.forEach(title => title.style.display = 'none');
        domTitleTxt.style.cssText = `
          margin-bottom: 2em;
          border-radius: 3em;
          letter-spacing: 0em;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #ff0000a1;
          width: 100%;
          text-align: center;
          line-height: 0em;
          box-shadow: 0em 0em 0em 0em;
          font-size: 1.5em;
        `;
        upComingMoviesContainer.style.display = 'none';
        theatresContainer.style.display = 'none';
        popularMoviesContainer.style.display = 'none';
        topRatedMoviesContainer.style.display = 'none';
        searchResultContainer.innerHTML = '';

        getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`, (data) => {
          if (data.results.length === 0) {
            window.location.href = 'error404.html';
          } else {
            domTitleTxt.textContent = `Total movies found for ${inputValue.charAt(0).toUpperCase() + inputValue.slice(1)} : ${data.total_results}`;
            data.results.forEach((movie) => {
              const movieCard = createMovieCard(movie);
              searchResultContainer.appendChild(movieCard);
            });
          }
        });
      } else if (/^[0-9]+$/.test(inputValue)) {
        getData(`https://api.themoviedb.org/3/movie/${inputValue}?api_key=${apiKey}`, (data) => {
          titlesContainers.forEach(title => title.style.display = 'none');
          domTitleTxt.style.cssText = `
            margin-bottom: 2em;
            border-radius: 3em;
            letter-spacing: 0em;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #ff0000a1;
            width: 100%;
            text-align: center;
            line-height: 0em;
            box-shadow: 0em 0em 0em 0em;
            font-size: 1.5em;
          `;
          upComingMoviesContainer.style.display = 'none';
          theatresContainer.style.display = 'none';
          popularMoviesContainer.style.display = 'none';
          topRatedMoviesContainer.style.display = 'none';
          searchResultContainer.innerHTML = '';
          domTitleTxt.textContent = `Movie name is: ${data.title}`;
          const movieCard = createMovieCard(data);
          searchResultContainer.appendChild(movieCard);
        });
      } else {
        // Handle invalid input
        alert('Please enter a valid movie title or ID.')
      }
    });
  });
};


// Function to reset the placeholder text in the search input
const resetPlaceholder = () => {
  searchInputs.forEach((searchInput, index) => {
    const whiteGlassSearch = whiteGlassSearches[index];
    searchInput.addEventListener('focus', () => {
      searchInput.placeholder = '';
      if (whiteGlassSearch) whiteGlassSearch.style.display = 'fixed';
    });

    searchInput.addEventListener('blur', () => {
      searchInput.placeholder = 'Search movies';
      if (whiteGlassSearch) whiteGlassSearch.style.display = 'block';
    });
  });
};

// Function to display upcoming movies
const upComingMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, (data) => {
    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      upComingMoviesContainer.appendChild(movieCard);
    });
  });
};

// Function to display movies currently in theaters
const currentlyInTheaters = () => {
  getData(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, (data) => {
    data.results.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      theatresContainer.appendChild(movieCard);
    });
  });
};


// Initialize functions if on the index.html page
if (window.location.pathname.endsWith("index.html")) {
  resetPlaceholder();
  upComingMovies();
  topRatedMovies();
  popularMovies();
  currentlyInTheaters();
  searchMovies();
}

