import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { topRatedMoviesContainer } from "../../DOM/storage-elements-dom.js";
import { addfavoriteMovieToList } from "../../post-api-calls/post-add-movie-to-favorite-list.js";
import { handleCopyToClipboard } from "./global-copy-to-clipboard-el.js";
import { navigateToMoviePage } from "../../DOM/homepage-navigate-to-single-movie-page-dom.js";
import { getMovieTrailer } from "../../get-api-calls/get-movie-trailer.js";
import { setPlayBtnVideo } from "../../DOM/set-play-button-href-to-video-dom.js";
import { isMovieAddedFav } from "../../DOM/favorite-ids-storage.js";

// Handles user interactions on the homepage for movie cards.
const hotPicksButtonsPage = () => {
  // Attach an event listener to each movie card container on the homepage.
  topRatedMoviesContainer.addEventListener('click', async (ev) => {
      // Identify the nearest interactive elements in the movie card.
      const dataBtn = ev.target.closest('.white-data-btn');
      const shareButton = ev.target.closest('.white-share-trailer-btn');
      const heartButton = ev.target.closest('.white-heart-trailer-btn');
      const playButton = ev.target.closest('.play-button-btn');
      const movieCard = ev.target.closest('.movie-card');
      const trailerImg = ev.target.closest('.img-trailer-link');
      const movieName = movieCard.querySelector('.title').textContent;
      const movieId = movieCard.id.replace(/\D/g, '');
      
      // If the movie card doesn't exist, alert the user and stop execution.
      if (!movieCard) {
        displayAlertMessage('no-movie-card-found');
        return;
      }

      // Handle the data button click: Navigate to the movie page.
      if (dataBtn) {
        try {
          const result = await getMovieTrailer(movieId);
          
          // If the trailer is not available, show an error message.
          if (!result.key) {
            displayAlertMessage('error-fetch-movie-trailer', movieName);
            console.error('Error getting the movie ID', movieId);
          } else {
            const videoId = result.key;
            displayAlertMessage('navigating-to-another-page', movieName);
            navigateToMoviePage(movieId, videoId);
          }
        } catch (error) {
          console.error('Error navigating to single movie page', error);
        }
        return;
      }

      // Handle the share button click: Copy the trailer URL to the clipboard.
      if (shareButton) {
        ev.preventDefault();
        try {
          const result = await getMovieTrailer(movieId);
          const videoUrl = `https://www.youtube.com/watch?v=${result.key}`;

          // If the trailer is not available, show an error message.
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

      // Handle the heart button click: Add the movie to the favorites list.
      if (heartButton) {
        ev.preventDefault();
        const isAdded = isMovieAddedFav(movieId,movieName);

        // If the movie was successfully added to the favorites (not already in the list)
        if (isAdded) {
          // Now we add the movie to the list and display the success message
          addfavoriteMovieToList(movieId);
          displayAlertMessage('success-added-movie-to-favorite-picks', movieName);
          return;
          
        } else {
          // Do nothing if the movie was already in the favorites
          return;
        }
      }

      // Handle the play button click: Open the movie trailer.
      if (playButton) {
        try {
          const result = await getMovieTrailer(movieId);
          const videoUrl = `https://www.youtube.com/watch?v=${result.key}`;

          // If the trailer is not available, show an error message.
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

      // Handle the trailer image click: Redirect to the YouTube trailer.
      if (trailerImg) {
        try {
          const result = await getMovieTrailer(movieId);
          const videoUrl = `https://www.youtube.com/watch?v=${result.key}`;

          // If the trailer is not available, show an error message.
          if (!result.key) {
            displayAlertMessage('No trailer to watch', movieName);
          } else {
            setPlayBtnVideo(trailerImg, videoUrl);
            window.location.href = videoUrl;
          }
        } catch (error) {
          console.error('Error fetching movie trailer:', error);
        }
        return;
      }
    });
  }

export { hotPicksButtonsPage };
