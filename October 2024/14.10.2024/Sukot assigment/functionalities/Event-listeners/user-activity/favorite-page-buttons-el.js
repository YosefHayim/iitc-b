import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { favMoviesContainer } from "../../DOM/storage-elements-dom.js";
import {removeFavMovie} from "../../post-api-calls/post-remove-movie-from-favorite-list.js"
import {reloadThisPage} from "../../DOM/reload-current-page-dom.js"

const handleFavoriteMoviePage = () => {
  favMoviesContainer.addEventListener('click', (ev) => {
    const dataIcon = ev.target.closest('.fav-white-data-btn');
    const shareButton = ev.target.closest('.fav-white-share-trailer-btn');
    const removeButton = ev.target.closest('.fav-remove-btn-icon');
    const playButton = ev.target.closest('.fav-play-button-btn');
  
    if (dataIcon) {
      ev.preventDefault(); 
      // Get the movie card's ID and extract the numeric part.
      const favMovieId = dataIcon.closest('.movie-card').id.replace(/\D/g, '');

      // Select the play button within the movie card.
      const movieCardDiv = dataIcon.closest('.movie-card');
      const playButton = movieCardDiv.querySelector('.fav-play-button-btn');

      // Show an alert message.
      let message = 'Redirecting...';
      displayAlertMessage(message);

      if (playButton) {
        // Get the video URL and extract the video ID.
        const videoUrl = playButton.getAttribute('href');
        const videoId = videoUrl.split('v=')[1];

        // Redirect to the movie data page with movieId and videoUrl as parameters.
        window.location.href = `movie-data.html?movieId=${favMovieId}&videoUrl=${encodeURIComponent(videoId)}`;
      }
    }

    if (shareButton) {
      ev.preventDefault();
      const trailerUrl = shareButton.getAttribute('href');
      console.log(`Trailer URL: ${trailerUrl}`);
      handleCopyToClipboard(shareButton, trailerUrl);
    }
    
    if (removeButton) {
      ev.preventDefault();
      const favMovieId = ev.target.closest('.movie-card').id.replace(/\D/g, '');
      removeFavMovie(favMovieId);

      setTimeout(() => {
        reloadThisPage();
      }, 500);
      
      let message = `Movie has been removed successfully.`;
      displayAlertMessage(message);
    }
    
    if (playButton) {
      ev.preventDefault();
      if (playButton.src && playButton.src.includes('no-trailer-available-img')) {
        let message = `This movie doesn't have a trailer yet.`;
        let backgroundColor = `#ffcd05`;
        displayAlertMessage(message, backgroundColor);
      }
    }
  });
};

export {handleFavoriteMoviePage}