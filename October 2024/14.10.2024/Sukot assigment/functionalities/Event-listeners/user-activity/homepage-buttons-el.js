import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { homePageDivs } from "../../DOM/storage-elements-dom.js";
import { addfavoriteMovieToList } from "../../post-api-calls/post-add-movie-to-favorite-list.js";
import { handleCopyToClipboard } from "./global-copy-to-clipboard-el.js";
import { navigateToMoviePage } from "../../DOM/homepage-navigate-to-single-movie-page-dom.js";
import { getMovieTrailer } from "../../get-api-calls/get-movie-trailer.js";

const HomeMovieDataButtonClicks = () => {
  homePageDivs.forEach((cardMoviesContainer) => {
    cardMoviesContainer.addEventListener('click', async (ev) => {

      const dataBtn = ev.target.closest('.white-data-btn');    
      const shareButton = ev.target.closest('.white-share-trailer-btn');
      const heartButton = ev.target.closest('.white-heart-trailer-btn');
      const playButton = ev.target.closest('.play-button-btn');

      // Handles data icon button click
      if (dataBtn) {
        const movieCardDiv = dataBtn.closest('.movie-card');
        const movieName = dataBtn.closest('.movie-card').querySelector('.title').textContent;
        const movieId = movieCardDiv.id.replace(/\D/g, '');
        const playButton = movieCardDiv.querySelector('.play-button-btn');
        const videoUrl = playButton.getAttribute('href');

        if (!videoUrl) {
          displayAlertMessage('navigating-to-another-page',movieName);
          navigateToMoviePage(movieId);

        } else {
          displayAlertMessage('no-youtube-video-available',movieName);
          navigateToMoviePage(movieId, videoUrl);
        }

      // Handles share button click
      } else if (shareButton) {
        ev.preventDefault();
        if (!shareButton.getAttribute('href')) {
          const movieName = shareButton.closest('.movie-card').querySelector('.title').textContent;
          displayAlertMessage('no-url-to-copy',movieName)

        } else if (shareButton.getAttribute('href').length > 33) {
          const movieName = shareButton.closest('.movie-card').querySelector('.title').textContent;
          const videoUrl = shareButton.getAttribute('href');
          handleCopyToClipboard(videoUrl);
          displayAlertMessage('success-copy-movie-url',movieName)
        }

      // Handles heart button click
      } else if (heartButton) {
        ev.preventDefault();
        const movieId = heartButton.closest('.movie-card').id.replace(/\D/g, '');
        const movieName = heartButton.closest('.movie-card').querySelector('.title').textContent;
        addfavoriteMovieToList(movieId);
        displayAlertMessage('success-added-movie-to-favorite-picks',movieName)

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
              displayAlertMessage('No trailer to watch',movieName)
            } else {
              playButton.setAttribute('href', `https://www.youtube.com/watch?v=${result.key}`);
              displayAlertMessage('success-added-trailer',movieName)
            }
          } catch (error) {
            displayAlertMessage('error-fetch-movie-trailer',movieName)
          }
        }
      }
    });
  });
};

export { HomeMovieDataButtonClicks };
