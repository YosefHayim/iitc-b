import { getData } from "./api-functions.js";
import { copyToClipboard } from "../Event-listeners/user-activity/copy-to-clipboard-el.js";
import { apiKey } from "../global/env.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js"
import { noTrailerImg } from "../DOM/no-trailer-image-dom.js";

const getMoviesTrailers = (movieId, movieCardDiv) => {

  // Fetch movie details along with videos (trailers)
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`, (data) => {

    if (!data) {
      console.log(`Error fetching data`);
      // redirectToErrorPage();
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

      // Set trailer URLs for play, share, and image links if elements exist for the regular buttons.
      if (playButton && imgTrailerLink && shareButton) {
        playButton.setAttribute('href', trailerUrl);
        shareButton.setAttribute('href', trailerUrl);
        imgTrailerLink.setAttribute('href', trailerUrl);
        copyToClipboard(shareButton, trailerUrl);
        
      } else {
        // else those buttons dont exist we are on another page and we set the trailer Url to other page button elements.
        const favImgBox = movieCardDiv.querySelector('.fav-movie-trailer-url') 
        const favPlayBtn = movieCardDiv.querySelector('.fav-play-button-btn');
        const favShareBtn = movieCardDiv.querySelector('.fav-white-share-trailer-btn');

        // if those 3 buttons exist we attach to them href with the trailer url.
        if (favPlayBtn && favShareBtn && favImgBox) {
          favPlayBtn.setAttribute('href', trailerUrl);
          favShareBtn.setAttribute('href', trailerUrl);
          favImgBox.setAttribute('href',trailerUrl)
        }
      }
    } else {

      const playButton = movieCardDiv.querySelector('.play-button-img');   
      const favPlayBtn = movieCardDiv.querySelector('.fav-play-button-img');

      if (playButton) {
        noTrailerImg(playButton)

      } else if (favPlayBtn) {
        noTrailerImg(favPlayBtn)        
      }

    }
  });
};

export { getMoviesTrailers };
