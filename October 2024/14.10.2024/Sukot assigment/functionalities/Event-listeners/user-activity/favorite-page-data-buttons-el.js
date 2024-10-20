import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { favMoviesContainer } from "../../DOM/storage-elements-dom.js";

// Favorite data buttons clicks.
const handleFavoriteMovieClick = () => {
  favMoviesContainer.addEventListener('click', (ev) => {
    const favButton = ev.target.closest('.fav-white-data-btn');
    
    if (favButton) {
      ev.preventDefault();

      // Get the movie card's ID and extract the numeric part.
      const favMovieId = favButton.closest('.movie-card').id.replace(/\D/g, '');

      // Select the play button within the movie card.
      const movieCardDiv = favButton.closest('.movie-card');
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
  });
};

export { handleFavoriteMovieClick };
