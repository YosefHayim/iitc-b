const isNameToLong = (title) => {
  let movieName;

  if (title.split(' ').length >= 4) {
    movieName = title.split(' ').slice(0, 3).join(' ');    

  } else {
    movieName = title.split(' ').slice(0, 2).join(' ');
  }
  return movieName
} 

export {isNameToLong}