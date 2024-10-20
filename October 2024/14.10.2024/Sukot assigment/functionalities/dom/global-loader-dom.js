
const screenLoadingAnimation = () => {
  window.addEventListener('load', () => {
    // Hide all elements except the loader on page load
    document.body.querySelectorAll('*:not(.loader)').forEach((element) => {
      element.style.display = 'none';
    });

    // After 0.5s, show the hidden elements and hide the loader
    setTimeout(() => {
      document.querySelectorAll('*:not(.loader)').forEach((element) => {
        element.style.display = '';
      });
      document.querySelector('.loader').style.display = 'none';
    }, 500);
  });
}

export { screenLoadingAnimation };
