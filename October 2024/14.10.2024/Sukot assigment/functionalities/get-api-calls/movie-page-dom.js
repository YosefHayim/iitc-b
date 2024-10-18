import { getData } from "../api-functions.js";
import { apiKey } from "../env.js";
import { getStarRatingImage } from "./get-rating-movie.js";
import { singleMovieCard } from "../dom/domEls.js";

const presentSingleMovieById = () => {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams);

  const movieId = urlParams.get('movieId');
  console.log(movieId);

  if (!movieId) {
    window.location.href = 'error404.html';
    return;
  }

  // Fetch movie details
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, (singleMovieD) => {
    if (!singleMovieD) {
      window.location.href = 'error404.html';
      return;
    }
    console.log(singleMovieD);

    // Display movie details
    singleMovieCard.innerHTML = `
      <h1 class="title-single-movie">${singleMovieD.original_title}</h1>
      <img src="https://image.tmdb.org/t/p/original/${singleMovieD.poster_path}" alt="movie-img" class="single-movie-img">
      <div class="single-img-container">
        <div class="rating-container">
          <img src="${getStarRatingImage(singleMovieD.vote_average)}" alt="rating-img" class="rating-img">
          <h2 class="rating-number-txt">${singleMovieD.vote_average.toFixed(1)}</h2>
        </div>
        <a class="play-button-btn-single-movie"><img src="../images/user-activity/play-button-icon.svg" alt="play-button-icon" class="play-button-img"></a>
        <p class="movie-details">${singleMovieD.overview}</p>
        <button class="movie-link"><a href="${singleMovieD.homepage}" target="_blank" class="website-link">Visit Homepage</a></button>
      </div>
    `;

    // Fetch movie cast
    getData(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`, (creditsData) => {
      if (!creditsData || !creditsData.cast) {
        window.location.href = 'error404.html';
        return;
      }
      
      console.log(creditsData);
      
      const castContainer = document.createElement('div');
      castContainer.classList.add('cast-container');
      singleMovieCard.appendChild(castContainer);

      creditsData.cast.slice(0, 10).forEach(actor => {
        const actorDiv = document.createElement('div');
        actorDiv.classList.add('actor');
        actorDiv.innerHTML = `
          <div class="img-name-container">
            <img src="https://image.tmdb.org/t/p/original/${actor.profile_path}" alt="${actor.name}" class="actor-img">
            <p class="actor-name">${actor.name} as ${actor.character}</p>
          </div>
        `;
        castContainer.appendChild(actorDiv);
      });
    });
  });
};

export { presentSingleMovieById };
