const redirectToErrorPage = () => {
  // redirect to 404 page for 4 seconds, then to index.html
  window.location.href = 'error404.html';
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 4000);
};

export { redirectToErrorPage }
