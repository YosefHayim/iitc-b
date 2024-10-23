// A simple function to create a div each time it is being called and return the div back to where it was called to.
const createDomEl = () => {
  const divEl = document.createElement('div')
  return divEl
}

export {createDomEl}