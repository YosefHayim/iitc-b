const navigateToMoviePage = (movieCardId,videoId) => {
  if (!videoId) {
  window.location.href = `movie-data.html?movieId=${movieCardId}`;
  return
  }
  window.location.href = `movie-data.html?movieId=${movieCardId}&videoUrl=${encodeURIComponent(videoId)}`;
  return
  }

  export {navigateToMoviePage}