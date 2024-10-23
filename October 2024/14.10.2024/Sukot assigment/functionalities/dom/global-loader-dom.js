// The loader animation is being added to the browser by listening to every time we are loading the browser 
const screenLoadingAnimation = () => {
  window.addEventListener('load', () => {
    // We are selecting in the body all the elements that does not have the class .loader (Which is everything)
    document.body.querySelectorAll('*:not(.loader)').forEach((element) => {
      element.style.display = 'none';
    });
    // Using asynchronous function setTimeout to return the elements back and set the loader to none.
    setTimeout(() => {
      document.querySelectorAll('*:not(.loader)').forEach((element) => {
        element.style.display = '';
      });
      document.querySelector('.loader').style.display = 'none';
    }, 500);
  });
}

export { screenLoadingAnimation };
