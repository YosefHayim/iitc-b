import { addfavoriteMovieToList } from "../post-api-calls/post-movies-to-favorite-list.js";
import { alertMessage } from "../DOM/alert-message-dom.js";

const heartBtnClick = (movieCardDiv) => {
  // Handle "favorite" button click
      const heartButton = movieCardDiv.querySelector('.white-heart-trailer-btn');
      heartButton.addEventListener('click', (ev) => {
      ev.preventDefault();
  
    // Calling the alertMessage to avoid duplicated code areas
    let message = `Movie added to favorite picks`;
    alertMessage(message)
  
    const movieCardId = ev.target.closest('.movie-card').id.replace(/\D/g, '');
    addfavoriteMovieToList(movieCardId);
    
    }
  );
}

export {heartBtnClick}