// Checking if the provided image is null and if so we provide a default image back.
const isImageNull = (imageSource) => {
    
  if (!imageSource) {
    imageSource = `/IITC-B/October 2024/14.10.2024/Sukot assigment/images/user-activity/template-null-img.svg`;

  } else {
    imageSource = `https://image.tmdb.org/t/p/original/${imageSource}`;
  }
  return imageSource
}

export { isImageNull };
