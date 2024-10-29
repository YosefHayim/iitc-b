// Redirecting to the specific genreId page
const redirectToGenreMoviesPage = (genreId) => {
  window.location.href = `/pages/genres-page.html?genreId=${genreId}`;
};

export { redirectToGenreMoviesPage };
