// Returns a string of movie genres joined by commas.
// Example: ['Action', 'Drama'] -> "Action, Drama"
const displayMovieGenres = (movieGenres) => {
  const totalGenres = movieGenres.map((genre) => genre.name).join(", ");
  return totalGenres;
};

export { displayMovieGenres };
