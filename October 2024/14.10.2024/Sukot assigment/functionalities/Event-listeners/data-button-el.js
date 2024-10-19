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
      
      let message = 'Redirecting...';
      alertMessage(message);

      window.location.href = `movie-data.html?movieId=${movieCardId}&videoUrl=${encodeURIComponent(videoId)}`;
    } else {
      message = `We don't have that link, what a baba bummer...`
      alertMessage(message)
    }
  });
}

export { clickDataBtn };
