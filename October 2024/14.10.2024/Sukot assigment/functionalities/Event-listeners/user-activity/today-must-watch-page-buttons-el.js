import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { navigateToMoviePage } from "../../DOM/homepage-navigate-to-single-movie-page-dom.js";
import { handleCopyToClipboard } from "./global-copy-to-clipboard-el.js";
import { addfavoriteMovieToList } from "../../post-api-calls/post-add-movie-to-favorite-list.js";
import { popularOfTheDayContainer } from "../../DOM/storage-elements-dom.js";
import { getMovieTrailer } from "../../get-api-calls/get-movie-trailer.js";
import { setPlayBtnVideo } from "../../DOM/set-play-button-href-to-video-dom.js";

// This function is responsible for the todayMustWatch page interactive with the user.
const todayMustWatchPlayButtons = () => {  
    popularOfTheDayContainer.addEventListener('click', async (ev) => {
    // When the user preforms a click we get the nearest interactive buttons of that movie card which are the data,share,heart,movie ID,img and movie name.
      const dataBtn = ev.target.closest('.white-data-btn');
      const shareImg = ev.target.closest('.white-share-img');
      const heartBtn = ev.target.closest('.white-heart-trailer-btn');
      const playButton = ev.target.closest('.play-button-btn');
      const movieCard = ev.target.closest('.movie-card');
      const movieName = movieCard.querySelector('h1').textContent;      
      const movieCardId = movieCard.id.replace(/\D/g, '');
      const trailerImg = ev.target.closest('.img-trailer-link')      
      
      if (!movieCard) {
        displayAlertMessage('no-movie-card-found');
        return;
      }

      // Data button clicked: Navigate to the movie page
      if (dataBtn) {
        try {
          const result = await getMovieTrailer(movieCardId);
          console.log(result);
          
          if (!result.key) {
            displayAlertMessage('error-fetch-movie-trailer',movieName)
            console.error('Error getting the movie id',movieCardId);
          } else {
            const videoId = result.key
            displayAlertMessage('navigating-to-another-page', movieName);
            navigateToMoviePage(movieCardId,videoId);
          }
        } catch (error) {
          console.error('Error navigating to single movie page',error)
        }
        return
      }

      // Share button clicked: Handle copying trailer URL to clipboard
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

      // Heart button clicked: Add movie to favorite list
      if (heartBtn) {
        ev.preventDefault();
        addfavoriteMovieToList(movieCardId);
        displayAlertMessage('success-added-movie-to-favorite-picks', movieName);
      }

      // Play button clicked: Open the movie trailer
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
      
      // If the trailerImg was clicked which is the trailer image card.
      if (trailerImg) {
        try {
          const result = await getMovieTrailer(movieCardId)
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
    }
    )
  }
  


export { todayMustWatchPlayButtons };
