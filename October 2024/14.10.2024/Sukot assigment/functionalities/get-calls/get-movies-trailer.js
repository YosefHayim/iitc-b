import { getData } from "../api-functions.js";
import {apiKey} from "../security/env.js"



const getMoviesTrailers = (movieId, movieCardDiv) => {
  const playButton = movieCardDiv.querySelector('.play-button-btn');
  const shareButton = movieCardDiv.querySelector('.white-share-trailer-btn');
  
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`, (data) => {
    const video = data.videos?.results?.find(vid => vid.key);
    
    if (video) {
      const trailerUrl = `https://www.youtube.com/watch?v=${video.key}`;
      playButton.setAttribute('href', trailerUrl);
      
      // Set href for the share button and add click event to copy URL
      shareButton.setAttribute('href', trailerUrl);
      shareButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents navigation
        navigator.clipboard.writeText(trailerUrl)
          .then(() => {
            alert('Trailer URL copied');
          })
          .catch(err => console.error('Failed to copy trailer URL', err));
      });
    } else {
      playButton.style.display = 'none';
      shareButton.style.display = 'none'; // Hide the share button if there's no trailer
    }
  });
};

export {getMoviesTrailers}