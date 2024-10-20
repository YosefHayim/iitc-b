const roundMovieRating = (movieRating) => {
  // rounding the movie rating instead to be 7.543 to be 7.2 
  const roundValue = movieRating.toFixed(1)
  return roundValue
}

export {roundMovieRating}