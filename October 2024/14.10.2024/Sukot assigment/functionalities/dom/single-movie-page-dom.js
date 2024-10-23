import { singlePageMovieData } from "./storage-elements-dom.js";
import { isImageNull } from "./is-image-null-dom.js";
import { isNameToLong } from "./is-movie-title-long-dom.js";
import { getStarRatingImage } from "./rating-movie-stars-img-dom.js";
import { createDomEl } from "./create-div-dom.js";
import { displayAlertMessage } from "./alert-message-dom.js";
import { getReleaseStatus } from "./is-release-date-dom.js";
import { displayMovieGenres } from "./creating-movie-genres-dom.js";
import { roundMovieRating } from "./round-rating-movie-dom.js";

// This function is rendering and manipulating the dom of the movie-data.html
const renderSingleMoviePage = (singleMovieData,creditsData,videoUrl) => {
  // Calling the isImageNull function to check if there is available image in the data if not we set a default image.
  const image = isImageNull(singleMovieData.poster_path);
  // Calling getReleaseStatus function to provide the user info about if the movie has been already released or not and how many days has been or has to be released.
  const isReleased = getReleaseStatus(singleMovieData.release_date)
  // Calling the getStarRatingImage to display the amount of stars based on the vote of the movie. e.g. movie is 2 we provide 1 star, e.g. its 4 stars we provide 8, tops is 5.
  const resultRatingImg = getStarRatingImage(singleMovieData.vote_average)
  // A function to receive an array from the API object response accessing the genres array and creating new array for each genre that the movie has.
  const movieGenres = displayMovieGenres(singleMovieData.genres)
  // This function is simply rounding the movie rating to have 2 digits only. e.g. instead of 7.542 as we get from the API call converted to 7.5
  const roundRatingFloat = roundMovieRating(singleMovieData.vote_average)
  const movieName = singleMovieData.original_title
  const urlWeb = singleMovieData.homepage
  const overviewMovie = singleMovieData.overview
  
  // If we received a URL we set the button text to watch trailer else we set it to no trailer available
  if (!videoUrl) {
    buttonText = 'No trailer available.'
    displayAlertMessage('no-youtube-video-available',movieName)
  }

  let buttonText = 'Watch the trailer'
  displayAlertMessage('success-received-movie-data',movieName)

  

  singlePageMovieData.innerHTML = `
  <div class="single-img-container">
  <h1 class="title-single-movie">${movieName}</h1>
  <div class="rating-container">
  <img src="${resultRatingImg}" alt="rating-img" class="rating-img">
  <h2 class="rating-number-txt">${roundRatingFloat}</h2>
  </div>
  <img src="${image}" alt="movie-img" class="single-movie-img">
  <h2 class="movie-release">Movie release: ${isReleased}</h2>
  <h2 class"movie-genre">Movie genres: ${movieGenres}</h2>
  <h3 class="summary-title">Summary</h3>
  <p class="movie-details">${overviewMovie}</p>
  <button class="movie-link">
  <a href="${urlWeb}" target="_blank" class="website-link">Website Movie</a>
  </button>
  <div class="video-container">
  <button class="button-trailer">
  <a href="https://www.youtube.com/watch?v=${videoUrl}" class="link-trailer">${buttonText}</a></button>
  </div>
  </div>
  `;
  
  // Selecting the video container because we are in the DOM
  const videoContainer = document.querySelector('.video-container')
  // Creating two div elements one for the cast (actors) and one for the actor title container.
  const castContainer = createDomEl()
  const castContainerTitle = createDomEl()
  castContainerTitle.innerHTML = `
  <h1 class="actors-title">Actors of the <span class="movie-name">movie</span>: ${movieName}</h1>`
  videoContainer.insertAdjacentElement('afterend',castContainerTitle)

  castContainer.classList.add('cast-container');
  singlePageMovieData.appendChild(castContainer);
// In case there is falsy cast API response
  if (!creditsData.cast) {
    castContainer.textContent = `This movie doesn't have actors yet, oh baba...`
    castContainer.style.fontSize = `3em`
  }
// We present only 10 actors from the array 
  creditsData.cast.slice(0, 10).forEach(actor => {
    const actorDiv = createDomEl()
  
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
  }
  )
}

export {renderSingleMoviePage}