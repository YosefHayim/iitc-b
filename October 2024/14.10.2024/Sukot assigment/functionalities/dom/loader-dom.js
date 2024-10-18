// Loader manipulation
const loader = () => {
  window.addEventListener('load', function() {
    // Initially hide everything except the loader
    document.querySelectorAll('body *:not(.loader)').forEach(function(element) {
      element.style.display = 'none'; // Set display to none for all elements except .loader
    });
  
    // Show the loader for 2 seconds, then display the content
    setTimeout(function() {
      // Show everything else
      document.querySelectorAll('body *:not(.loader)').forEach(function(element) {
        element.style.display = ''; // Reset display to default (make visible)
      });
      
      document.querySelector('.loader').style.display = 'none';
    }, 200); 
  });
  
}

export {loader}