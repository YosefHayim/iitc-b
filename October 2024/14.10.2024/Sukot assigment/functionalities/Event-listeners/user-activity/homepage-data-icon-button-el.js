import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { homePageDivs } from "../../DOM/storage-elements-dom.js";

const HomeMovieDataButtonClicks = () => {

  // Handle data buttons clicks on each movie container
  homePageDivs.forEach((cardMoviesContainer) => {
    cardMoviesContainer.addEventListener('click', (ev) => {

      // Check if the clicked element is the data button (with class .white-data-img)
      const dataBtn = ev.target.closest('.white-data-img');
      if (!dataBtn) return;  // Exit if the click is not on a data button

      // Find the closest movie card (ancestor of the clicked button)
      const movieCard = dataBtn.closest('.movie-card');
      if (!movieCard) return;  // Exit if no movie card is found

      // Find the play button within the movie card
      const playButton = movieCard.querySelector('.play-button-btn');
      if (!playButton) return;  // Exit if there's no play button in the movie card

      // Check if the play button has an 'href' attribute
      if (playButton && playButton.hasAttribute('href')) {
        // Extract the video URL from the play button's 'href' attribute
        const videoUrl = playButton.getAttribute('href');
        const videoId = videoUrl.split('v=')[1];  // Extract the YouTube video ID from the URL
        console.log(`That's the video ID:`, videoId);

        // Find the movie card's ID and remove non-numeric characters
        const movieCardId = movieCard.id.replace(/\D/g, '');

        // Display an alert message and redirect to the movie-data page
        let message = `Redirecting...`;
        let backgroundColor = `green`;
        displayAlertMessage(message, backgroundColor);

        // Redirect to the movie-data page with the movieCard ID and video URL
        window.location.href = `movie-data.html?movieId=${movieCardId}&videoUrl=${encodeURIComponent(videoId)}`;
      }
    });
  });
}

export { HomeMovieDataButtonClicks };
