import { alertMessage } from "../DOM/alert-message-dom.js";
import { favMoviesContainer } from "../DOM/storage-elements-dom.js";

// Favorite data buttons clicks.
const clickFavShareBtn = () => {
  favMoviesContainer.addEventListener('click', (ev) => {
    
    const shareImg = ev.target.closest('.fav-white-share-img');
    if (shareImg) {
      ev.preventDefault();
      const trailerUrl = shareImg.getAttribute('href');
      console.log(`Trailer URL: ${trailerUrl}`);

      // Copy the trailer URL to clipboard
      navigator.clipboard.writeText(trailerUrl).then(() => {
        alertMessage('Trailer URL copied to clipboard!');
      }).catch((err) => {
        alertMessage('Failed to copy URL. Please try again.');
        console.error('Error copying to clipboard:', err);
      });

    }
  });
};

export { clickFavShareBtn };
