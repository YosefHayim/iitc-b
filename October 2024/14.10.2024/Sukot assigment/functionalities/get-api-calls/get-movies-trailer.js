import { getData } from "../api-functions.js";
import { alertMessageContainer } from "../dom/domEls.js";
import { apiKey } from "../env.js";

const getMoviesTrailers = (movieId, movieCardDiv) => {
  // Select elements within the movie card
  const playButton = movieCardDiv.querySelector('.play-button-btn');
  const shareButton = movieCardDiv.querySelector('.white-share-trailer-btn');
  const imgTrailerLink = movieCardDiv.querySelector('.img-trailer-link');
  
  // Fetch movie details along with videos (trailers)
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`,(data) => {

    // console.log(data);

      // Find the first video (trailer) key from the results
      const video = data.videos?.results?.find(vid => vid.key);

      if (video) {
        const trailerUrl = `https://www.youtube.com/watch?v=${video.key}`;

        // Set trailer URLs for play, share, and image links if elements exist
        if (playButton && imgTrailerLink && shareButton) {
          playButton.setAttribute('href', trailerUrl);
          shareButton.setAttribute('href', trailerUrl);
          imgTrailerLink.setAttribute('href', trailerUrl);

          // Add event listener to handle the share button click
          shareButton.addEventListener('click', (ev) => {
            ev.preventDefault();

            // Copy trailer URL to clipboard and display confirmation message
            navigator.clipboard.writeText(trailerUrl)
              .then(() => {
                showAlertMessage(`Trailer URL Copied`);
              })
              .catch(err => {
                console.error('Failed to copy trailer URL', err);
                showAlertMessage(`Failed to copy URL`);
              });
          });
        }
      }
    }
  );
};

// Function to display an alert message for a brief period
const showAlertMessage = (message) => {
  alertMessageContainer.textContent = message;
  alertMessageContainer.style.display = 'flex';

  setTimeout(() => {
    alertMessageContainer.style.display = 'none';
  }, 3000);
};

export { getMoviesTrailers };
