// Select both buttons and <h3> elements
const toggles = document.querySelectorAll('button, h3');

// Add event listeners to both buttons and <h3> elements
toggles.forEach((toggle) => {
  toggle.addEventListener("click", (ev) => {
    ev.preventDefault();

    // Find the closest container (assumed as .question-container) to locate related elements
    const container = toggle.closest('.question-container');
    const btnImage = container.querySelector('.icon-plus');
    const pElement = container.querySelector('p');

    // Toggle the 'hidden' class on <p>
    pElement.classList.toggle('hidden');

    // Update the image based on the visibility of the <p>
    if (pElement.classList.contains('hidden')) {
      btnImage.src = './assets/images/icon-plus.svg';
    } else {
      btnImage.src = './assets/images/icon-minus.svg';
    }
  });
});
