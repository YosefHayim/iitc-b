const redirectToErrorPage = () => {
  // redirecting to 404 page 
  window.location.href = 'error404.html';
  // we preform asynchronous action and once set gets to 4 we direct to index.html page
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 4000);
}

export { redirectToErrorPage }
