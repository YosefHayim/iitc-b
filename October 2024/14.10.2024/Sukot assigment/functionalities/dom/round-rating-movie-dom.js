// This function is simply rounding the movie rating to have 2 digits only. e.g. instead of 7.542 as we get from the API call converted to 7.5
const roundMovieRating = (movieRating) => {
  const roundValue = movieRating.toFixed(1)
  return roundValue
}

export {roundMovieRating}