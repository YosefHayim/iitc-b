import { addfavoriteMovieToList } from "../../post-api-calls/post-add-movie-to-favorite-list.js";
import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { homePageDivs } from "../../DOM/storage-elements-dom.js";

const HomeHeartButtonClicks = () => {
  // Handle "favorite" button click
  homePageDivs.forEach((cardMoviesContainer) => {
    cardMoviesContainer.addEventListener('click', (ev) => {
      ev.preventDefault();

      // Check if the heart button was clicked
      const heartBtn = ev.target.closest('.white-heart-img');
      if (!heartBtn) return;  // Exit if it's not a heart button click

      // Find the closest movie card and get its ID
      const movieCard = heartBtn.closest('.movie-card');
      
      const movieCardId = movieCard.id.replace(/\D/g, '');  // Get numeric ID

      // Display alert and add to favorites
      let message = `Movie added to favorite picks`;
      displayAlertMessage(message);
      addfavoriteMovieToList(movieCardId);
    });
  });
}

export { HomeHeartButtonClicks };
