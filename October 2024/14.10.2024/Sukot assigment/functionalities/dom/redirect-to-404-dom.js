const redirectToErrorPage = () => {
  window.location.href = 'error404.html';
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 4000);
};

export { redirectToErrorPage }
