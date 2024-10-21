import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { favMoviesContainer } from "../../DOM/storage-elements-dom.js";
import { removeFavMovie } from "../../post-api-calls/post-remove-movie-from-favorite-list.js";
import { navigateToMoviePage } from "../../DOM/homepage-navigate-to-single-movie-page-dom.js";
import { handleCopyToClipboard } from "../user-activity/global-copy-to-clipboard-el.js";
import { getMovieTrailer } from "../../get-api-calls/get-movie-trailer.js";
import { setPlayBtnVideo } from "../../DOM/set-play-button-href-to-video-dom.js";

const handleFavoriteMoviePage = () => {
  favMoviesContainer.addEventListener('click', async (ev) => {

    const dataBtn = ev.target.closest('.fav-white-data-btn');
    const shareButton = ev.target.closest('.fav-white-share-trailer-btn');
    const removeButton = ev.target.closest('.fav-remove-btn-icon');
    const playButton = ev.target.closest('.fav-play-button-btn');
    const movieCard = ev.target.closest('.movie-card');

    if (!movieCard) {
      displayAlertMessage('no-movie-card-found');
      return;
    }

    const movieName = movieCard.querySelector('.title').textContent;
    const favMovieId = movieCard.id.replace(/\D/g, '');

    // Handle movie data button click: Navigate to movie page
    if (dataBtn) {
      displayAlertMessage('navigating-to-another-page', movieName);
      navigateToMoviePage(favMovieId);
      return;
    }

    // Handle share button click: Copy the URL to clipboard
    if (shareButton) {
      ev.preventDefault();
      try {
        const result = await getMovieTrailer(favMovieId);
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
      return;
    }

    // Handle remove button click: Remove movie from favorites
    if (removeButton) {
      ev.preventDefault();
      try {
        removeFavMovie(favMovieId);
        movieCard.style.display = 'none';
        displayAlertMessage('success-removed-movie', movieName);
      } catch (error) {
        console.error('Error removing movie:', error);
      }
      return;
    }

    // Handle play button click: Play movie trailer
    if (playButton) {
      try {
        const result = await getMovieTrailer(favMovieId);
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
      return;
    }
  });
};

export { handleFavoriteMoviePage };
