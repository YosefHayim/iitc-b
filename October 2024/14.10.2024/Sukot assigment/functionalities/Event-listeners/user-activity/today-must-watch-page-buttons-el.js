import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { navigateToMoviePage } from "../../DOM/homepage-navigate-to-single-movie-page-dom.js";
import { handleCopyToClipboard } from "./global-copy-to-clipboard-el.js";
import { addfavoriteMovieToList } from "../../post-api-calls/post-add-movie-to-favorite-list.js";
import { popularOfTheDayContainer } from "../../DOM/storage-elements-dom.js"

const todayMustWatchPlayButtons = () => {  
    popularOfTheDayContainer.addEventListener('click', (ev) => {
      
      const dataBtn = ev.target.closest('.white-data-btn');
      const shareImg = ev.target.closest('.white-share-img');
      const heartBtn = ev.target.closest('.white-heart-trailer-btn');
      const playButton = ev.target.closest('.play-button-btn');
      const movieCard = ev.target.closest('.movie-card');

      if (!movieCard) {
        displayAlertMessage('no-movie-card-found');
        return;
      }

      const movieName = movieCard.querySelector('.title');
      const movieCardId = movieCard.id.replace(/\D/g, '');

      if (dataBtn) {
        if (!playButton) {
          displayAlertMessage('No trailer to watch', movieName);
          return;
        }

        if (playButton.hasAttribute('href')) {
          const videoUrl = playButton.getAttribute('href');
          const videoId = videoUrl.split('v=')[1];
          displayAlertMessage('navigating-to-another-page');
          navigateToMoviePage(movieCardId, videoId);
        } else {
          displayAlertMessage('no-movie-data-exist', movieName);
        }
      }

      if (shareImg) {
        ev.preventDefault();
        const trailerUrl = shareImg.getAttribute('href');
        handleCopyToClipboard(shareImg, trailerUrl);
        displayAlertMessage('success-copy-movie-url', movieName);
      }

      if (heartBtn) {
        ev.preventDefault();
        addfavoriteMovieToList(movieCardId);
        displayAlertMessage('success-added-movie-to-favorite-picks', movieName);
      }

      if (playButton && !playButton.hasAttribute('href')) {
        displayAlertMessage('No trailer to watch', movieName);
      }
    });
}

export { todayMustWatchPlayButtons };
