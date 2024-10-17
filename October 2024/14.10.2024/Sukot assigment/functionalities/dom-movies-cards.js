import {getMoviesTrailers} from "./get-movies-trailer.js"
import {getStarRatingImage} from "./get-rating-movie.js"
import {addfavoriteMovieToList} from "./post-movies-to-favorite-list.js"

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
    <h2 class="rating-number-txt">${(movie.vote_average ?? 0).toFixed(1)}</h2>
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

export {createMovieCard}