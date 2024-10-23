import { redirectToErrorPage } from "./redirect-to-404-dom.js";

// This function receiving the movieCardId which is essential the movie ID and the video ID from the event listeners.
const navigateToMoviePage = (movieCardId,videoId) => {
  // Checking if we the card ID is not falsy (null or undefined) if so we redirecting to 404 error page.
  if (!movieCardId) {
    redirectToErrorPage()
  }
  // Checking if the video exist if not we pass just the movie ID and proceed to the movie data page.
  if (!videoId) {
  window.location.href = `movie-data.html?movieId=${movieCardId}`;
  return

  // Else we have both parameters we are passing them to the movie-data page which will allow the trailer button to have the url to allow the user to be redirect to YT
  } else {
    window.location.href = `movie-data.html?movieId=${movieCardId}&videoUrl=${encodeURIComponent(videoId)}`;
    return
  }
  }

  export {navigateToMoviePage}