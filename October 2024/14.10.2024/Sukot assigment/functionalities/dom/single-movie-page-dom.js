import { singleMovieCard } from "../global/domEls.js";
import { isImageNull } from "./is-image-null-dom.js";
import { isNameToLong } from "./is-movie-title-long-dom.js";
import { getStarRatingImage } from "./rating-movie-stars-img-dom.js";


const creatingSingleMovieDataView = (singleMovieData,creditsData,videoUrl) => {
  
  const image = isImageNull(singleMovieData.poster_path);
  const movieName = isNameToLong(singleMovieData.original_title);
  const resultRatingImg = getStarRatingImage(singleMovieData.vote_average)
  const roundRatingFloat = singleMovieData.vote_average.toFixed(1)
  const urlWeb = singleMovieData.homepage
  const overviewMovie = singleMovieData.overview

  singleMovieCard.innerHTML = `
  <div class="single-img-container">
  <h1 class="title-single-movie">${movieName}</h1>
  <div class="rating-container">
  <img src="${resultRatingImg}" alt="rating-img" class="rating-img">
  <h2 class="rating-number-txt">${roundRatingFloat}</h2>
  </div>
  <img src="https://image.tmdb.org/t/p/original/${image}" alt="movie-img" class="single-movie-img">
  <h3 class="summary-title">Summary</h3>
  <p class="movie-details">${overviewMovie}</p>
  <button class="movie-link">
  <a href="${urlWeb}" target="_blank" class="website-link">Visit Homepage</a>
  </button>
  <div class="video-container">
  <button class="button-trailer">
  <a href="https://www.youtube.com/watch?v=${videoUrl}" class="link-trailer">Watch Trailer</a></button>
  </div>
  </div>
  `;
  
  const castContainer = document.createElement('div');
  castContainer.classList.add('cast-container');
  singleMovieCard.appendChild(castContainer);

  creditsData.cast.slice(0, 10).forEach(actor => {
    const actorDiv = document.createElement('div');
    actorDiv.classList.add('actor');
    const actorName = isNameToLong(actor.name)
    const image = isImageNull(actor.profile_path)        
    
    actorDiv.innerHTML = `
      <div class="img-name-container">
        <img src="${image}" alt="${actorName}" class="actor-img">
        <p class="actor-name">${actorName}</p>
      </div>
    `;

    castContainer.appendChild(actorDiv);
  }  )}


export {creatingSingleMovieDataView}