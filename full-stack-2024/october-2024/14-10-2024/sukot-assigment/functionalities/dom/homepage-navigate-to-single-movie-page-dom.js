import { redirectToErrorPage } from "./redirect-to-404-dom.js";

// Navigates to the movie data page, using the movie ID and video ID (if available).
const navigateToMoviePage = (movieCardId, videoId) => {
  // If the movie card ID is falsy (null or undefined), redirect to the 404 error page.
  if (!movieCardId) {
    redirectToErrorPage();
  }

  // If the video ID is missing, navigate to the movie data page with just the movie ID.
  if (!videoId) {
    window.location.href = `movie-data.html?movieId=${movieCardId}`;
    return;
  }

  // If both movie ID and video ID exist, navigate to the movie data page with both, allowing trailer access.
  window.location.href = `movie-data.html?movieId=${movieCardId}&videoUrl=${encodeURIComponent(
    videoId
  )}`;
  return;
};

export { navigateToMoviePage };
