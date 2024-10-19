import { getData } from "../api-functions.js";
import { alertMessageContainer } from "../dom/domEls.js";
import {apiKey} from "../env.js"


const getMoviesTrailers = (movieId, movieCardDiv) => {
  const playButton = movieCardDiv.querySelector('.play-button-btn');
  const shareButton = movieCardDiv.querySelector('.white-share-trailer-btn');
  const imgTrailerLink = movieCardDiv.querySelector('.img-trailer-link')
  
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`, (data) => {

    const video = data.videos?.results?.find(vid => vid.key);

    if (video) {
    const trailerUrl = `https://www.youtube.com/watch?v=${video.key}`;

    if (playButton && imgTrailerLink && shareButton) {
      playButton.setAttribute('href', trailerUrl);
      shareButton.setAttribute('href', trailerUrl);
      imgTrailerLink.setAttribute('href', trailerUrl);

      shareButton.addEventListener('click', (ev) => {
      ev.preventDefault();
    
      navigator.clipboard.writeText(trailerUrl).then(() => {
        alertMessageContainer.textContent = `Trailer URL Copied`;
        alertMessageContainer.style.display = 'flex';
    
        setTimeout(() => {
          alertMessageContainer.style.display = 'none';
        }, 3000);
    
      }).catch(err => {
        console.error('Failed to copy trailer URL', err);
    
        // Display the failure message
        alertMessageContainer.textContent = `Failed to copy URL`;
        alertMessageContainer.style.display = 'flex';
    
        setTimeout(() => {
          alertMessageContainer.style.display = 'none';
        }, 3000);
        
      });
    });
    }}});
  }

export {getMoviesTrailers}