// This function gets the date released from the API call and checks if it has been released before the date or after and converts it to amount of days.
const getReleaseStatus = (dateString) => {
  // Converts the data received to the timestamps.
  const targetDate = new Date(dateString).getTime(); 
  // Get the current timestamps
  const currentDate = Date.now(); 
  
  // Calculating the difference 
  const difference = targetDate - currentDate; 
  
  const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
// If the day difference is above 0 means it got released a few days ago
  if (daysDifference < 0) {
    return `Released ${Math.abs(daysDifference)} days ago`;
    // Else we received less than 0 it is about to be released.
  } else {
    return `${daysDifference} days left until release`;
  }
}

export {getReleaseStatus}