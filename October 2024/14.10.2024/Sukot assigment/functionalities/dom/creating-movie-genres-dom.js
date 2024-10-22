const displayMovieGenres = (movieGenres) => {
  const totalGenres = movieGenres.map((genre) => genre.name).join(', ');
  return totalGenres
}

export {displayMovieGenres}