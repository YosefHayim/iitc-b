// This function is used to navigate user to the error 404 page and than we use asynchronous setTimeout to redirect the user back to the homepage.
const redirectToErrorPage = () => {
  window.location.href = 'error404.html';
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 4000);
};

export { redirectToErrorPage }
