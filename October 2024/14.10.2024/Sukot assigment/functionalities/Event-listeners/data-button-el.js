import { alertMessage } from "../DOM/alert-message-dom.js";

const clickDataBtn = (movieCardDiv) => {
  // Handle "data" button click
  const dataButton = movieCardDiv.querySelector('.white-data-btn');
  
  dataButton.addEventListener('click', (ev) => {
    ev.preventDefault();

    // Get the closest movie-card element and its ID
    const movieCardId = ev.target.closest('.movie-card').id.replace(/\D/g, '');
    console.log(`That's the movie card ID:`, movieCardId);

    // Query the play button within the movie card
    const playButton = movieCardDiv.querySelector('.play-button-btn');

    if (playButton && playButton.hasAttribute('href')) {
      const videoUrl = playButton.getAttribute('href');
      const videoId = videoUrl.split('v=')[1];
      console.log(`That's the video ID:`, videoId);

      let message = 'Redirecting...';
      alertMessage(message);

      // Redirect to the movie-data page with movieId and videoUrl as parameters
      window.location.href = `movie-data.html?movieId=${movieCardId}&videoUrl=${encodeURIComponent(videoId)}`;
    } else {
      let message = `Redirecting...`;
      let backgroundColor = `green`
      window.location.href = `movie-data.html?movieId=${movieCardId}`;
      alertMessage(message,backgroundColor);
    }
  });
};

export { clickDataBtn };
