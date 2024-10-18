const loaderManipulation = () => {
  window.addEventListener('load', () => {
    document.body.querySelectorAll('*:not(.loader)').forEach((element) => {
      element.style.display = 'none'; 
    });
  
    setTimeout(() => {
      document.querySelectorAll('*:not(.loader)').forEach((element) => {
        element.style.display = ''; 
      });
      
      document.querySelector('.loader').style.display = 'none';
    }, 300); 
  });
  
}

export {loaderManipulation}