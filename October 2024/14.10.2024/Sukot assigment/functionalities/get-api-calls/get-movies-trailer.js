import { getData } from "../api-functions.js";
import { copyToClipboard } from "../DOM/copy-to-clipboard-el.js";
import { apiKey } from "../env.js";

const getMoviesTrailers = (movieId, movieCardDiv) => {
  // Select elements within the movie card
  const playButton = movieCardDiv.querySelector('.play-button-btn');
  const shareButton = movieCardDiv.querySelector('.white-share-trailer-btn');
  const imgTrailerLink = movieCardDiv.querySelector('.img-trailer-link');
  
  // Fetch movie details along with videos (trailers)
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`,(data) => {

    // Find the first video (trailer) key from the results
    const video = data.videos?.results?.find(vid => vid.key);

  if (video) {
    const trailerUrl = `https://www.youtube.com/watch?v=${video.key}`;

  // Set trailer URLs for play, share, and image links if elements exist
  if (playButton && imgTrailerLink && shareButton) {
    playButton.setAttribute('href', trailerUrl);
    shareButton.setAttribute('href', trailerUrl);
    imgTrailerLink.setAttribute('href', trailerUrl);

    copyToClipboard(shareButton, trailerUrl);
        
      }
    }
  }
);
};

export { getMoviesTrailers };
