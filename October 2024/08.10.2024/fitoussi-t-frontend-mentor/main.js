const btns = document.querySelectorAll('button');

btns.forEach((button) => {
  button.addEventListener("click", (ev) => {
    ev.preventDefault();

    const btnImage = button.querySelector('.icon-plus');
    const pElement = button.closest('.question-container').querySelector('p');

    // Toggle the 'hidden' class on <p>
    pElement.classList.toggle('hidden');

    // Update the image source based on the visibility of the <p>
    if (pElement.classList.contains('hidden')) {
      btnImage.src = './assets/images/icon-plus.svg'; // Show "plus" icon when text is hidden
    } else {
      btnImage.src = './assets/images/icon-minus.svg'; // Show "minus" icon when text is visible
    }
  });
});
