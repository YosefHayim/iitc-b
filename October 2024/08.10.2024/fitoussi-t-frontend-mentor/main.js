const btns = document.querySelectorAll('button');

btns.forEach((button) => {
  button.addEventListener("click", (ev) => {
    ev.preventDefault();

    const btnImage = button.querySelector('.icon-plus');
    const pElement = button.closest('.question-container').querySelector('p');

    pElement.classList.toggle('hidden');

    if (pElement.classList.contains('hidden')) {
      btnImage.src = './assets/images/icon-plus.svg'; 
    } else {
      btnImage.src = './assets/images/icon-minus.svg'; 
    }
  });
});
