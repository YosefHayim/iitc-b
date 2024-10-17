const burgerIconActivate = () => {
  burgerIcon.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (burgerIcon.src.includes("white-remove-icon.svg")) {
      burgerIcon.src = "../images/mobile-navbar/white-burger-icon.svg";
      overlayDiv.style.display = 'none'; 
    } else {
      burgerIcon.src = "../images/user-activity/white-remove-icon.svg";
      overlayDiv.style.display = 'block'; 
    }
  });

  overlayDiv.addEventListener('click', () => {
    overlayDiv.style.display = 'none';
    burgerIcon.src = "../images/mobile-navbar/white-burger-icon.svg"; 
  });
}

export{burgerIconActivate}