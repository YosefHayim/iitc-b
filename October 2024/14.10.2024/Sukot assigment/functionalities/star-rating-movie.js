// Function to get the star rating image based on vote_average
const getStarRatingImage = (vote_average) => {
  if (vote_average < 2) return "../images/one-star-icon.svg";
  else if (vote_average < 4) return "../images/two-stars-icon.svg";
  else if (vote_average < 6) return "../images/three-stars-icon.svg";
  else if (vote_average < 8) return "../images/four-stars-icon.svg";
  else return "../images/five-stars-icon.svg";
};

export {getStarRatingImage}