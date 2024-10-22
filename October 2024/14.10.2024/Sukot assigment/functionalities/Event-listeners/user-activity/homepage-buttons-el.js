import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { homePageDivs } from "../../DOM/storage-elements-dom.js";
import { addfavoriteMovieToList } from "../../post-api-calls/post-add-movie-to-favorite-list.js";
import { handleCopyToClipboard } from "./global-copy-to-clipboard-el.js";
import { navigateToMoviePage } from "../../DOM/homepage-navigate-to-single-movie-page-dom.js";
import { getMovieTrailer } from "../../get-api-calls/get-movie-trailer.js";
import { setPlayBtnVideo } from "../../DOM/set-play-button-href-to-video-dom.js";

const HomeMovieDataButtonClicks = () => {
  homePageDivs.forEach((cardMoviesContainer) => {
    cardMoviesContainer.addEventListener('click', async (ev) => {

      const dataBtn = ev.target.closest('.white-data-btn');
      const shareButton = ev.target.closest('.white-share-trailer-btn');
      const heartButton = ev.target.closest('.white-heart-trailer-btn');
      const playButton = ev.target.closest('.play-button-btn');
      const movieCard = ev.target.closest('.movie-card');

      if (!movieCard) {
        displayAlertMessage('no-movie-card-found');
        return;
      }

      const movieName = movieCard.querySelector('.title').textContent;
      const movieId = movieCard.id.replace(/\D/g, '');

      // Data button clicked: Navigate to the movie page
      if (dataBtn) {
        try {
          const result = await getMovieTrailer(movieId);
          console.log(result);
          
          if (!result.key) {
            displayAlertMessage('error-fetch-movie-trailer',movieName)
            console.error('Error getting the movie id',movieId);
          } else {
            const videoId = result.key
            displayAlertMessage('navigating-to-another-page', movieName);
            navigateToMoviePage(movieId,videoId);
          }
        } catch (error) {
          console.error('Error navigating to single movie page',error)
        }
        return
      }

      // Share button clicked: Handle copying trailer URL to clipboard
      if (shareButton) {
        ev.preventDefault();
        try {
          const result = await getMovieTrailer(movieId);
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

      // Heart button clicked: Add movie to favorite list
      if (heartButton) {
        ev.preventDefault();
        addfavoriteMovieToList(movieId);
        displayAlertMessage('success-added-movie-to-favorite-picks', movieName);
        return;
      }

      // Play button clicked: Open the movie trailer
      if (playButton) {
        try {
          const result = await getMovieTrailer(movieId);
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
  });
};

export { HomeMovieDataButtonClicks };

