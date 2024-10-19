import { getData } from "../api-functions.js";
import { apiKey } from "../env.js";
import { getStarRatingImage } from "./get-rating-movie.js";
import { singleMovieCard } from "../dom/domEls.js";

const presentSingleMovieById = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const movieId = urlParams.get('movieId');

  const videoUrl = urlParams.get('videoUrl')
  

  if (!movieId) {
    window.location.href = 'error404.html';
    return;
  }

  // Fetch movie details
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, (singleMovieData) => {

    if (!singleMovieData) {
      window.location.href = 'error404.html';
      return;
    }

    // Display movie details
    singleMovieCard.innerHTML = `
    <div class="single-img-container">
    <h1 class="title-single-movie">${singleMovieData.original_title}</h1>

    <div class="rating-container">
    <img src="${getStarRatingImage(singleMovieData.vote_average)}" alt="rating-img" class="rating-img">
    <h2 class="rating-number-txt">${singleMovieData.vote_average.toFixed(1)}</h2>
    </div>

    <img src="https://image.tmdb.org/t/p/original/${singleMovieData.poster_path}" alt="movie-img" class="single-movie-img">

    <h3 class="summary-title">Summary</h3>

    <p class="movie-details">${singleMovieData.overview}</p>

    <button class="movie-link">
    <a href="${singleMovieData.homepage}" target="_blank" class="website-link">Visit Homepage</a>
    </button>

    <div class="video-container">
    <button class="button-trailer"><a href="https://www.youtube.com/watch?v=${videoUrl}" class="link-trailer">Watch Trailer</a></button>
    </div>
    </div>
    `;

    getData(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`, (creditsData) => {

      if (!creditsData || !creditsData.cast) {
        window.location.href = 'error404.html';
        return;
      }
            
      const castContainer = document.createElement('div');
      castContainer.classList.add('cast-container');
      singleMovieCard.appendChild(castContainer);

      creditsData.cast.slice(0, 10).forEach(actor => {
        const actorDiv = document.createElement('div');
        actorDiv.classList.add('actor');
        
        actorDiv.innerHTML = `
          <div class="img-name-container">
            <img src="https://image.tmdb.org/t/p/original/${actor.profile_path}" alt="${actor.name}" class="actor-img">
        
            <p class="actor-name">${actor.name.split(' ').length > 3 ? actor.name.split(' ').slice(0, 2).join(' ') : actor.name.split(' ').slice(0, 2).join(' ')}</p>
          </div>
        `;

        castContainer.appendChild(actorDiv);
      });
    });
  });
};

export { presentSingleMovieById };
