const timeSince = (dateString) => {
  const givenDate = new Date(dateString); // Convert input to Date object
  const now = new Date(); // Current date and time
  const diffInMs = now - givenDate; // Difference in milliseconds

  if (diffInMs < 0) {
    return "The given date is in the future!";
  }

  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 0) {
    return `${diffInDays}d`;
  } else if (diffInHours > 0) {
    return `${diffInHours}h`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes}m`;
  } else {
    return `${diffInSeconds}s`;
  }
};

export default timeSince;
