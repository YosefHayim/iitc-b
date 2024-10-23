// Receiving the image source from the API call and if its falsy we set our own image to maintain the symmetric of the website
const isImageNull = (imageSource) => {
  if (!imageSource) {
    imageSource = `/IITC-B/October 2024/14.10.2024/Sukot assigment/images/user-activity/template-null-img.svg`;
    // Else it does exist we set the image url to display it on the DOM
  } else {
    imageSource = `https://image.tmdb.org/t/p/original/${imageSource}`;
  }
  return imageSource
}

export { isImageNull };
