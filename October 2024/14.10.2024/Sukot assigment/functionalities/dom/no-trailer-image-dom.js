// This function checks if the movie has trailer or not and if not we set a warning button image on the play Button to clue the user about this movie has no trailer yet.
const noTrailerImg = (buttonImage) => {
  buttonImage.src = `/IITC-B/October 2024/14.10.2024/Sukot assigment/images/user-activity/no-trailer-available-img.svg`
  return buttonImage
}

export {noTrailerImg}