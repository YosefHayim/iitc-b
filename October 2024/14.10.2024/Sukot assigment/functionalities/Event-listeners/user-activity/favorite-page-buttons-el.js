import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { favMoviesContainer } from "../../DOM/storage-elements-dom.js";
import { removeFavMovie } from "../../post-api-calls/post-remove-movie-from-favorite-list.js";
import { navigateToMoviePage } from "../../DOM/homepage-navigate-to-single-movie-page-dom.js";
import { handleCopyToClipboard } from "../user-activity/global-copy-to-clipboard-el.js";
import { getMovieTrailer } from "../../get-api-calls/get-movie-trailer.js";
import { setPlayBtnVideo } from "../../DOM/set-play-button-href-to-video-dom.js";

// This function handles the favorite page, we attach event listener delegation to all the container.
const handleFavoriteMoviePage = () => {
  favMoviesContainer.addEventListener('click', async (ev) => {
    // Setting the global buttons so we locate the nearest one that was clicked.
    const trailerImg = ev.target.closest('.fav-movie-trailer-url')    
    const dataBtn = ev.target.closest('.fav-white-data-btn');
    const shareButton = ev.target.closest('.fav-white-share-trailer-btn');
    const removeButton = ev.target.closest('.fav-remove-btn-icon');
    const playButton = ev.target.closest('.fav-play-button-btn');
    const movieCard = ev.target.closest('.movie-card');
    const movieName = movieCard.querySelector('.title').textContent;
    const favMovieId = movieCard.id.replace(/\D/g, '');
    
// If we dont have a movie card class which means we don't have the movie itself we display to the user we don't found it.
    if (!movieCard) {
      displayAlertMessage('no-movie-card-found');
      return;
    }

    // Handle movie data button click: Navigate to movie page
    if (dataBtn) {
      try {
        // We preform asynchronous call to the getMovieTrailer which returns the trailer by the movie ID
        const result = await getMovieTrailer(favMovieId);
        console.log(result);
        
        // If we receive falsy than we display an alert to the user and log the error
        if (!result.key) {
          displayAlertMessage('error-fetch-movie-trailer',movieName)
          console.error('Error getting the movie id',favMovieId);

        // Else we receive the video ID we display the user an alert message and navigating to the movie data page.
        } else {
          const videoId = result.key
          displayAlertMessage('navigating-to-another-page', movieName);
          navigateToMoviePage(favMovieId,videoId);
        }
      } catch (error) {
        console.error('Error navigating to single movie page',error)
      }
      return
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

    // Handle when user clicks on the trailer image to redirect to the youtube video.
    if (trailerImg) {
      try {
        const result = await getMovieTrailer(favMovieId)
        const videoUrl = `https://www.youtube.com/watch?v=${result.key}`

        if (!result.key) {
          displayAlertMessage('No trailer to watch', movieName);
        } else {
          setPlayBtnVideo(trailerImg,videoUrl)
          window.location.href = videoUrl
        }
      } catch (error) {
        console.error ('Error fetching movie trailer:',error)
      }
      return
    }

  });
};

export { handleFavoriteMoviePage };
