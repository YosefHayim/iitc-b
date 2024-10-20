import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { favMoviesContainer } from "../../DOM/storage-elements-dom.js";

// Favorite data buttons clicks.
const handleFavoriteShareButtonClick = () => {
  favMoviesContainer.addEventListener('click', (ev) => {
    
    const shareImg = ev.target.closest('.fav-white-share-trailer-btn');
    if (shareImg) {
      ev.preventDefault();

      const trailerUrl = shareImg.getAttribute('href');
      console.log(`Trailer URL: ${trailerUrl}`);

      // Copy the trailer URL to clipboard
      navigator.clipboard.writeText(trailerUrl).then(() => {
        displayAlertMessage('Trailer URL copied to clipboard!');
      }).catch((err) => {
        displayAlertMessage('Failed to copy URL. Please try again.');
        console.error('Error copying to clipboard:', err);
      });

    }
  });
};

export { handleFavoriteShareButtonClick };
