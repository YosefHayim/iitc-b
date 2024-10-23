// This function is for the query search by ID or by name and it is being because no matter from what page the user 
// will preform a search in the input it will navigate him to the index html with the query either by ID or by name
const redirectToHome = (parmas) => {
  window.location.href = `index.html?${parmas.toString()}`;
}

export {redirectToHome}