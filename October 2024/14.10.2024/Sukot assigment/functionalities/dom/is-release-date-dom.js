const getReleaseStatus = (dateString) => {
  const targetDate = new Date(dateString).getTime(); 
  const currentDate = Date.now(); 
  
  const difference = targetDate - currentDate; 
  
  const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (daysDifference < 0) {
    return `Released ${Math.abs(daysDifference)} days ago`;
    
  } else {
    return `${daysDifference} days left until release`;
  }
}

export {getReleaseStatus}