import { singlePageMovieData } from "./storage-elements-dom.js";
import { isImageNull } from "./is-image-null-dom.js";
import { isNameToLong } from "./is-movie-title-long-dom.js";
import { getStarRatingImage } from "./rating-movie-stars-img-dom.js";
import { createDomEl } from "./create-div-dom.js";
import { displayAlertMessage } from "./alert-message-dom.js";
import { getReleaseStatus } from "./is-release-date-dom.js";
import { displayMovieGenres } from "./creating-movie-genres-dom.js";
import { roundMovieRating } from "./round-rating-movie-dom.js";

// Renders and manipulates the DOM for the movie-data.html page.
const renderSingleMoviePage = (singleMovieData, creditsData, videoUrl) => {
  // Get the movie poster, release status, star rating, genres, and rounded rating.
  const image = isImageNull(singleMovieData.poster_path);
  const isReleased = getReleaseStatus(singleMovieData.release_date);
  const resultRatingImg = getStarRatingImage(singleMovieData.vote_average);
  const movieGenres = displayMovieGenres(singleMovieData.genres);
  const roundRatingFloat = roundMovieRating(singleMovieData.vote_average);

  const movieName = singleMovieData.original_title;
  const urlWeb = singleMovieData.homepage;
  const overviewMovie = singleMovieData.overview;

  // If no trailer is available, set the button text accordingly and display an alert message.
  let buttonText = "Watch the trailer";
  if (!videoUrl) {
    buttonText = "No trailer available.";

    displayAlertMessage("no-youtube-video-available", movieName);
  } else {
    displayAlertMessage("success-received-movie-data", movieName);
  }

  // Populate the single movie data page with movie details.
  singlePageMovieData.innerHTML = `
    <div class="single-img-container">
      <h1 class="title-single-movie">${movieName}</h1>
      <div class="rating-container">
      <p class="rating-stars">${resultRatingImg}</p>
        <h2 class="rating-number-txt">${roundRatingFloat}</h2>
        <div class="hover-element">Hover on me</div>
      </div>
      <img src="${image}" alt="movie-img" class="single-movie-img">
      <button class="fav-button-movie-single-page">Add to top picks </button>
      <h2 class="movie-release">${isReleased}</h2>
      <h2 class="movie-genre">Movie genres: ${movieGenres}</h2>
      <h2 class="summary-title">Summary</h2>
      <p class="movie-details">${overviewMovie}</p>
      <button class="movie-link">
        <a href="${urlWeb}" target="_blank" class="website-link">Website Movie</a>
      </button>
      <div class="video-container">
        <button class="button-trailer">
          <a href="https://www.youtube.com/watch?v=${videoUrl}" class="link-trailer">${buttonText}</a>
        </button>
      </div>
    </div>
  `;

  // Create and append the cast container.
  const videoContainer = document.querySelector(".video-container");
  const castContainer = createDomEl();
  const castContainerTitle = createDomEl();

  castContainerTitle.innerHTML = `
    <h2 class="actors-title">Actors of the movie: ${movieName}</h2>
  `;
  videoContainer.insertAdjacentElement("afterend", castContainerTitle);

  castContainer.classList.add("cast-container");
  singlePageMovieData.appendChild(castContainer);

  // If no cast data is available, display a message.
  if (!creditsData.cast) {
    castContainer.textContent = `This movie doesn't have actors yet, oh baba...`;
    castContainer.style.fontSize = `3em`;
  }

  // Display up to 10 actors from the cast data.
  creditsData.cast.slice(0, 10).forEach((actor) => {
    const actorDiv = createDomEl();
    actorDiv.classList.add("actor");

    const actorName = isNameToLong(actor.name);
    const image = isImageNull(actor.profile_path);
    const actorActingNameText =
      actor.character.length > 1
        ? `Act as` + actor.character.split("/")[0].trim()
        : `Act as Unknown` + actor.character;

    actorDiv.innerHTML = `
    <span class="actor-star">★</span>
      <div class="img-name-container">
        <img src="${image}" alt="${actorName}" class="actor-img">
        <p class="actor-name">${actorName}</p>
        <p class="actor-role-name">${actorActingNameText}</div>
    `;
    castContainer.appendChild(actorDiv);
  });
};

export { renderSingleMoviePage };
