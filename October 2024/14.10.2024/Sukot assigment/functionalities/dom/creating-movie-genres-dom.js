// A function to receive an array from the API object response accessing the genres array and creating new array for each genre that the movie has.
const displayMovieGenres = (movieGenres) => {
  const totalGenres = movieGenres.map((genre) => genre.name).join(', ');
  return totalGenres
}

export {displayMovieGenres}