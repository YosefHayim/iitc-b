import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { favMoviesContainer } from "../../DOM/storage-elements-dom.js";
import { removeFavMovie } from "../../post-api-calls/post-remove-movie-from-favorite-list.js";
import { navigateToMoviePage } from "../../DOM/homepage-navigate-to-single-movie-page-dom.js";
import { handleCopyToClipboard } from "../user-activity/global-copy-to-clipboard-el.js";

const handleFavoriteMoviePage = () => {
  favMoviesContainer.addEventListener('click', (ev) => {
    
    const dataBtn = ev.target.closest('.fav-white-data-btn');
    const shareButton = ev.target.closest('.fav-white-share-trailer-btn');
    const removeButton = ev.target.closest('.fav-remove-btn-icon');
    const playButton = ev.target.closest('.fav-play-button-btn');

    // Handles movie data button click
    if (dataBtn) {
      ev.preventDefault();
      const movieCardDiv = dataBtn.closest('.movie-card');
      const movieName = dataBtn.closest('.movie-card').querySelector('.title').textContent;      
      const favMovieId = movieCardDiv.id.replace(/\D/g, '');
      const playButton = movieCardDiv.querySelector('.fav-play-button-btn');
      const videoUrl = playButton.getAttribute('href');
      const videoId = videoUrl.split('v=')[1];
      displayAlertMessage('navigating-to-another-page',movieName)
      navigateToMoviePage(favMovieId, videoId);

    // Handles share button click
    } else if (shareButton) {
      ev.preventDefault();
      if (shareButton.getAttribute('href').trim().length === 1) {
        const movieName = shareButton.closest('.movie-card').querySelector('.title').textContent;
        displayAlertMessage('no-url-to-copy',movieName)

      } else if (shareButton.getAttribute('href').length > 33) {
        const movieName = shareButton.closest('.movie-card').querySelector('.title').textContent;
        const videoUrl = shareButton.getAttribute('href');
        handleCopyToClipboard(videoUrl);
        displayAlertMessage('success-copy-movie-url',movieName)
      }

    // Handles remove button click
    } else if (removeButton) {
      ev.preventDefault();
      const favMovieId = removeButton.closest('.movie-card').id.replace(/\D/g, '');
      const movieName = removeButton.closest('.movie-card').querySelector('.title').textContent;
      const movieCard = removeButton.closest('.movie-card')
      removeFavMovie(favMovieId);
      movieCard.style.display = `none`
      displayAlertMessage('success-removed-movie',movieName)

    // Handles play button click
    } else if (playButton) {
      if (playButton.getAttribute('href').trim().length === 1) {
        const movieName = playButton.closest('.movie-card').querySelector('.title').textContent;
        displayAlertMessage('No trailer to watch',movieName)

      } else if (playButton.getAttribute('href').length > 33) {
        displayAlertMessage('navigating-to-another-page',movieName)

      }
    }
  });
};

export { handleFavoriteMoviePage };
