import { getData } from "./api-functions.js";
import { copyToClipboard } from "../Event-listeners/copy-to-clipboard-el.js";
import { apiKey } from "../global/env.js";

const getMoviesTrailers = (movieId, movieCardDiv) => {
  console.log(movieId);
  console.log(movieCardDiv);

  // Fetch movie details along with videos (trailers)
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`, (data) => {
    if (!data) {
      console.log(`Error fetching data`);
      redirectToErrorPage();
      return;
    }

    // Find the first video (trailer) with type "Trailer"
    const video = data.videos?.results?.find(vid => vid.type === "Trailer" && vid.key);

    if (video) {
      const trailerUrl = `https://www.youtube.com/watch?v=${video.key}`;

      // Select elements within the movie card of homepage
      const playButton = movieCardDiv.querySelector('.play-button-btn');
      const shareButton = movieCardDiv.querySelector('.white-share-trailer-btn');
      const imgTrailerLink = movieCardDiv.querySelector('.img-trailer-link');

      // Set trailer URLs for play, share, and image links if elements exist
      if (playButton && imgTrailerLink && shareButton) {
        playButton.setAttribute('href', trailerUrl);
        shareButton.setAttribute('href', trailerUrl);
        imgTrailerLink.setAttribute('href', trailerUrl);
        copyToClipboard(shareButton, trailerUrl);
        
      } else {
        const favPlayBtn = movieCardDiv.querySelector('.fav-play-button-img');
        const favShareBtn = movieCardDiv.querySelector('.fav-white-share-img');

        if (favPlayBtn && favShareBtn) {
          favPlayBtn.setAttribute('href', trailerUrl);
          favShareBtn.setAttribute('href', trailerUrl);
        }
      }
    }
  });
};

export { getMoviesTrailers };
