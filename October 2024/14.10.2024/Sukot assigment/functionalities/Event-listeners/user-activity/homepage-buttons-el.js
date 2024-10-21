import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { homePageDivs } from "../../DOM/storage-elements-dom.js";
import { addfavoriteMovieToList } from "../../post-api-calls/post-add-movie-to-favorite-list.js";
import { handleCopyToClipboard } from "./global-copy-to-clipboard-el.js";
import { navigateToMoviePage } from "../../DOM/homepage-navigate-to-single-movie-page-dom.js";
import { getMovieTrailer } from "../../get-api-calls/get-movie-trailer.js";

const HomeMovieDataButtonClicks = () => {
  homePageDivs.forEach((cardMoviesContainer) => {
    cardMoviesContainer.addEventListener('click', async (ev) => {  // Added 'async' to the event handler

      const dataBtn = ev.target.closest('.white-data-btn');    
      const shareButton = ev.target.closest('.white-share-trailer-btn');
      const heartButton = ev.target.closest('.white-heart-trailer-btn');
      const playButton = ev.target.closest('.play-button-btn');

      // Handles data icon button click
      if (dataBtn) {
        const movieCardDiv = dataBtn.closest('.movie-card');
        const movieId = movieCardDiv.id.replace(/\D/g, '');
        const playButton = movieCardDiv.querySelector('.play-button-btn');
        const videoUrl = playButton.getAttribute('href');

        if (!videoUrl) {
          let backgroundColor = `green`;
          let message = 'Redirecting...';
          displayAlertMessage(message, backgroundColor);
          navigateToMoviePage(movieId);
        } else {
          let backgroundColor = `green`;
          let message = 'Redirecting...';
          displayAlertMessage(message, backgroundColor);
          navigateToMoviePage(movieId, videoUrl);
        }

      // Handles share button click
      } else if (shareButton) {
        ev.preventDefault();
        if (!shareButton.getAttribute('href')) {
          const movieName = shareButton.closest('.movie-card').querySelector('.title').textContent;
          let textColor = `black`;
          let backgroundColor = `red`;
          let message = `Movie "${movieName}" has no URL.`;
          displayAlertMessage(message, backgroundColor, textColor);
        } else if (shareButton.getAttribute('href').length > 33) {
          const movieName = shareButton.closest('.movie-card').querySelector('.title').textContent;
          const videoUrl = shareButton.getAttribute('href');
          handleCopyToClipboard(videoUrl);
          let backgroundColor = `green`;
          let message = `Movie "${movieName}" URL Copied`;
          displayAlertMessage(message, backgroundColor);
        }

      // Handles heart button click
      } else if (heartButton) {
        ev.preventDefault();
        const movieId = heartButton.closest('.movie-card').id.replace(/\D/g, '');
        const movieName = heartButton.closest('.movie-card').querySelector('.title').textContent;
        addfavoriteMovieToList(movieId);
        let backgroundColor = `green`;
        let message = `Movie: ${movieName} Added to favorite Picks`;
        displayAlertMessage(message, backgroundColor);

      // Handles play button click
      } else if (playButton) {
        const trailerLink = playButton.closest('.movie-card').querySelector('.img-trailer-link');
        const movieId = playButton.closest('.movie-card').id.replace(/\D/g, '');
        const movieName = playButton.closest('.movie-card').querySelector('.title').textContent;

        if (trailerLink.getAttribute('href') === '#') {
          try {
            const result = await getMovieTrailer(movieId);
            console.log(result);

            if (!result) {
              let textColor = `black`;
              let backgroundColor = `#ffcd05`;
              let message = `The Movie "${movieName}" has no trailer`;
              displayAlertMessage(message, backgroundColor, textColor);
            } else {
              playButton.setAttribute('href', `https://www.youtube.com/watch?v=${result.key}`);
              let backgroundColor = `green`;
              let message = `Trailer for "${movieName}" loaded successfully.`;
              displayAlertMessage(message, backgroundColor);
            }
          } catch (error) {
            console.error('Error while fetching trailer:', error);
          }
        }
      }
    });
  });
};

export { HomeMovieDataButtonClicks };
