// Navigates the user to the 404 error page, then redirects them to the homepage after 4 seconds.
const redirectToErrorPage = () => {
  window.location.href = 'error404.html';
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 4000);
};

export { redirectToErrorPage };
