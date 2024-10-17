const getStarRatingImage = (vote_average) => {
  if (vote_average < 2) return "../images/user-activity/one-star-icon.svg";
  else if (vote_average < 4) return "../images/user-activity/two-stars-icon.svg";
  else if (vote_average < 6) return "../images/user-activity/three-stars-icon.svg";
  else if (vote_average < 8) return "../images/user-activity/four-stars-icon.svg";
  else if (vote_average <= 10) return "../images/user-activity/five-stars-icon.svg";
  else {
      return "../images/user-activity/no-stars-rating.svg";
  }
};

export {getStarRatingImage}