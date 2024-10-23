// This function checks if a movie has been released or not by comparing the release date to the current date.
// Example: If today is October 1st and the release date is September 20th -> "Released 11 days ago"
// Example: If today is October 1st and the release date is October 10th -> "9 days left until release"
const getReleaseStatus = (dateString) => {
  // Convert the release date to a timestamp.
  const targetDate = new Date(dateString).getTime();
  // Get the current timestamp.
  const currentDate = Date.now();
  
  // Calculate the difference in milliseconds.
  const difference = targetDate - currentDate;
  
  // Convert the difference to days.
  const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

  // If the difference is negative, the movie has already been released.
  if (daysDifference < 0) {
    return `Released ${Math.abs(daysDifference)} days ago`;
  // Otherwise, it's yet to be released.
  } else {
    return `${daysDifference} days left until release`;
  }
}

export { getReleaseStatus };
