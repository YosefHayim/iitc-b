import { popularOfTheWeekContainer } from "../../DOM/storage-elements-dom.js";
import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { navigateToMoviePage } from "../../DOM/homepage-navigate-to-single-movie-page-dom.js";
import { handleCopyToClipboard } from "./global-copy-to-clipboard-el.js";
import { addfavoriteMovieToList } from "../../post-api-calls/post-add-movie-to-favorite-list.js";

const weeklyHitsPageButtons = () => {
  popularOfTheWeekContainer.addEventListener('click', (ev) => {
  const dataBtn = ev.target.closest('.white-data-btn');
  const shareImg = ev.target.closest('.white-share-img');
  const heartBtn = ev.target.closest('.white-heart-trailer-btn');
  const playButton = ev.target.closest('.play-button-btn');

  if (dataBtn) {
    const movieCard = dataBtn.closest('.movie-card');
    if (!movieCard) {
      let message = `Error no movie ID`;
      let backgroundColor = `red`;
      displayAlertMessage(message, backgroundColor);
      return;
    }

    const playButton = movieCard.querySelector('.play-button-btn');
    if (!playButton) {
      let message = `No available Trailer`;
      let backgroundColor = `#ffcd05`;
      displayAlertMessage(message, backgroundColor);
      return;
    }

    if (playButton.hasAttribute('href')) {
      const videoUrl = playButton.getAttribute('href');
      const videoId = videoUrl.split('v=')[1];
      const movieCardId = movieCard.id.replace(/\D/g, '');

      let message = `Redirecting...`;
      let backgroundColor = `green`;
      displayAlertMessage(message, backgroundColor);
      navigateToMoviePage(movieCardId, videoId);

    } else {
      let message = `This movie doesn't have data.`;
      let backgroundColor = `#ffcd05`;
      displayAlertMessage(message, backgroundColor);
    }
  }

  if (shareImg) {
    ev.preventDefault();
    const trailerUrl = shareImg.getAttribute('href');
    handleCopyToClipboard(shareImg,trailerUrl)
  }

  if (heartBtn) {
    ev.preventDefault();
    const movieCard = heartBtn.closest('.movie-card');
    const movieCardId = movieCard.id.replace(/\D/g, '');
    addfavoriteMovieToList(movieCardId)
    let message = `Movie has been added to favorites.`;
    let backgroundColor = `green`;
    displayAlertMessage(message, backgroundColor);
  }

  if (playButton) {
    if (!playButton.hasAttribute('href')) {
      let message = `No trailer available for this movie.`;
      let backgroundColor = `#ffcd05`;
      displayAlertMessage(message, backgroundColor);
    }
  }
});
}

    export {weeklyHitsPageButtons}