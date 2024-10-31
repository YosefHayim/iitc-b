// Navigates the user to the 404 error page, then redirects them to the homepage after 4 seconds.
const redirectToErrorPage = () => {
  window.location.href = "/pages/error404.html";
  setTimeout(() => {
    window.location.href = "/pages/index.html";
  }, 3000);
};

export { redirectToErrorPage };
