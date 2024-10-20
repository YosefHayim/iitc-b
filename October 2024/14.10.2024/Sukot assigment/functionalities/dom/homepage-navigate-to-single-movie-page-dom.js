const navigateToMoviePage = (movieCardId,videoId) => {
  return window.location.href = `movie-data.html?movieId=${movieCardId}&videoUrl=${encodeURIComponent(videoId)}`;
  }

  export {navigateToMoviePage}