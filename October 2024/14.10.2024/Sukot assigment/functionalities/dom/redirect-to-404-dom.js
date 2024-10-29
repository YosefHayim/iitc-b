// Navigates the user to the 404 error page, then redirects them to the homepage after 4 seconds.
const redirectToErrorPage = () => {
  window.location.href = '/October 2024/14.10.2024/Sukot assigment/pages/error404.html';
  setTimeout(() => {
    window.location.href = '/October 2024/14.10.2024/Sukot assigment/index.html';
  }, 3000);
};

export { redirectToErrorPage };
