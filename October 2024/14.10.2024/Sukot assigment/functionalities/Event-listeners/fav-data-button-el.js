import { alertMessage } from "../DOM/alert-message-dom.js";
import { favMoviesContainer } from "../DOM/storage-elements-dom.js";

// Favorite data buttons clicks.
const clickFavDataBtn = () => {
  favMoviesContainer.addEventListener('click', (ev) => {
    
    if (ev.target.closest('.fav-white-data-btn')) {
      ev.preventDefault();
      const favMovieId = ev.target.closest('.movie-card').id.replace(/\D/g, '');

      let message = `Redirecting...`
      alertMessage(message);
      window.location.href = `movie-data.html?movieId=${favMovieId}`;

    }
  });
  

}
export {clickFavDataBtn}