const getReleaseStatus = (dateString) => {
  // Convert the release date string to a timestamp.
  const targetDate = new Date(dateString).getTime();
  // Get the current timestamp.
  const currentDate = Date.now();
  // Calculate the difference between the target date and the current date in milliseconds.
  const difference = targetDate - currentDate;

  // Convert the difference into days.
  const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

  // Calculate the absolute number of years, months, weeks, and days from the total days difference.
  const years = Math.floor(Math.abs(daysDifference) / 365);
  const months = Math.floor((Math.abs(daysDifference) % 365) / 30);
  const weeks = Math.floor((Math.abs(daysDifference) % 30) / 7);
  const days = Math.abs(daysDifference) % 7;

  // Prepare a list to store the time differences (years, months, weeks, days).
  const timePassed = [];

  // Add the appropriate year string if the difference includes years.
  if (years > 1) timePassed.push(`${years} years`);
  else if (years === 1) timePassed.push(`1 year`);

  // Add months, weeks, and days to the list if applicable.
  if (months > 0) timePassed.push(`${months} months`);
  if (weeks > 0) timePassed.push(`${weeks} weeks`);
  if (days > 0) timePassed.push(`${days} days`);

  // If the movie has already been released (daysDifference is negative), return a message about when it was released.
  if (daysDifference < 0) {
    return `Released: ${timePassed.join(", ")} ago`;
    // Otherwise, return a message about how long is left until the release.
  } else {
    return `${timePassed.join(", ")} left until release`;
  }
};

export { getReleaseStatus };
