// This function receives the title from the API call and checks by the amount of spaces how many words the title has.
const isNameToLong = (title) => {
  // We firstly split the title by the spaces and check if it is above 4 if so, 
  //we split again slice and takes from 0 to 3 of the array and than joining them.
  if (title.split(' ').length > 4) {
    const movieName = title.split(' ').slice(0, 2).join(' ');    
    return movieName
  // Else that is false we still take only two 
  } else {
    const movieName = title.split(' ').slice(0, 3).join(' ');
    return movieName
  }
} 

export {isNameToLong}