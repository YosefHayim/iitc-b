const redirectToHome = (parmas) => {
  window.location.href = `index.html?${parmas.toString()}`;
}

export {redirectToHome}