// Reloads the current page after a 500ms delay using setTimeout.
const reloadThisPage = () => {
  setTimeout(() => {
    window.location.reload();
  }, 500);
};

export { reloadThisPage };
