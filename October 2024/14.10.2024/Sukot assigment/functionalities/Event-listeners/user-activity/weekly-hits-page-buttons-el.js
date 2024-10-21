import { popularOfTheWeekContainer } from "../../DOM/storage-elements-dom.js";
import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { navigateToMoviePage } from "../../DOM/homepage-navigate-to-single-movie-page-dom.js";
import { handleCopyToClipboard } from "./global-copy-to-clipboard-el.js";
import { addfavoriteMovieToList } from "../../post-api-calls/post-add-movie-to-favorite-list.js";

const weeklyHitsPageButtons = () => {
  popularOfTheWeekContainer.addEventListener('click', async (ev) => {
  
    const dataBtn = ev.target.closest('.white-data-btn');
    const shareImg = ev.target.closest('.white-share-img');
    const heartBtn = ev.target.closest('.white-heart-trailer-btn');
    const playButton = ev.target.closest('.play-button-btn');
    const movieCard = ev.target.closest('.movie-card');
    
    if (!movieCard) {
      displayAlertMessage('no-movie-card-found');
      return;
    }

    const movieName = movieCard.querySelector('h1').textContent;      
    const movieCardId = movieCard.id.replace(/\D/g, '');
    console.log(movieCardId);

    if (dataBtn) {
      displayAlertMessage('navigating-to-another-page', movieName);
      navigateToMoviePage(movieCardId);
      return;
    }

    if (shareImg) {
      ev.preventDefault();
      try {
        const result = await getMovieTrailer(movieCardId);
        const videoUrl = `https://www.youtube.com/watch?v=${result.key}`;

        if (!result.key) {
          displayAlertMessage('No trailer to watch', movieName);
        } else {
          displayAlertMessage('success-copy-movie-url', movieName);
          handleCopyToClipboard(videoUrl);
        }
      } catch (error) {
        console.error('Error fetching movie trailer:', error);
      }
    }

    if (heartBtn) {
      ev.preventDefault();
      addfavoriteMovieToList(movieCardId);
      displayAlertMessage('success-added-movie-to-favorite-picks', movieName);
    }

    if (playButton) {
      try {
        const result = await getMovieTrailer(movieCardId);
        const videoUrl = `https://www.youtube.com/watch?v=${result.key}`;

        if (!result.key) {
          displayAlertMessage('No trailer to watch', movieName);
        } else {
          setPlayBtnVideo(playButton, videoUrl);
          window.location.href = videoUrl;
        }
      } catch (error) {
        console.error('Error fetching movie trailer:', error);
      }
    }
  });
}

    export {weeklyHitsPageButtons}

