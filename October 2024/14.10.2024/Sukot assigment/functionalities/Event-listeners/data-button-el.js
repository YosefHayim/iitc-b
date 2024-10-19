import { alertMessage } from "../DOM/alert-message-dom.js";

const clickDataBtn = (movieCardDiv) => {
  // Handle "data" button click
  const dataButton = movieCardDiv.querySelector('.white-data-btn');
  
  dataButton.addEventListener('click', (ev) => {
    ev.preventDefault();

    const movieCardDiv = ev.target.closest('.movie-card');
    const playButton = movieCardDiv.querySelector('.play-button-btn');

    if (playButton) {
      const videoUrl = playButton.getAttribute('href');
      const videoId = videoUrl.split('v=')[1];
      const movieCardId = movieCardDiv.id.replace(/\D/g, '');
      
      // Calling the alertMessage to avoid duplicated code areas
      let message = 'Redirecting...';
      alertMessage(message);

      window.location.href = `movie-data.html?movieId=${movieCardId}&videoUrl=${encodeURIComponent(videoId)}`;
    } else {
      console.error("Play button not found!");
    }
  });
}

export { clickDataBtn };
