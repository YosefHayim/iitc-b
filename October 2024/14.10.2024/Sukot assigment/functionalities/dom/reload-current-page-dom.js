// This function is simply reloading the page and using setTimeout asynchronous function so at the end of it we will reload the current page user is in.
const reloadThisPage = () => {
setTimeout(() => {
  window.location.reload() 

},500)
}

export {reloadThisPage}