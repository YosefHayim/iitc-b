// Redirecting to the specific genreId page
const redirectToGenreMoviesPage = (genreId) => {
  window.location.href = `/Sukot assigment/pages/genres-page.html?genreId=${genreId}`;
};

export { redirectToGenreMoviesPage };
