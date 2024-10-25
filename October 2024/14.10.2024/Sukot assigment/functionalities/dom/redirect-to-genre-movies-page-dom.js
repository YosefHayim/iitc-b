const redirectToGenreMoviesPage = (genreId) => {
  window.location.href = `genres-page.html?genreId=${genreId}`;
};

export { redirectToGenreMoviesPage };
