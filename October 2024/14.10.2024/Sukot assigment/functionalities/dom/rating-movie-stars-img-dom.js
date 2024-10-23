// This function receives the vote float number from the API call and checks if it is above 2,4,6,8 and return the relevant star image based on that.
const getStarRatingImage = (voteFloatingNumber) => {
  if (voteFloatingNumber < 2) return "../images/user-activity/one-star-icon.svg";

  else if (voteFloatingNumber < 4) 
    return "../images/user-activity/two-stars-icon.svg";

  else if (voteFloatingNumber < 6) 
    return "../images/user-activity/three-stars-icon.svg";

  else if (voteFloatingNumber < 8) 
    return "../images/user-activity/four-stars-icon.svg";

  else if (voteFloatingNumber <= 10) 
    return "../images/user-activity/five-stars-icon.svg";

  else {
    return "../images/user-activity/no-stars-rating.svg";
  }
};

export {getStarRatingImage}