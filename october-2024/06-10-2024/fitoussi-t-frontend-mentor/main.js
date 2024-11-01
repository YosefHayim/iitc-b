const allNumberDivs = document.querySelectorAll('.number-one, .number-two, .number-three, .number-four, .number-five');

allNumberDivs.forEach(div => {
  div.addEventListener('click', (ev) => {
    ev.preventDefault();

    // Reset styles for all buttons
    allNumberDivs.forEach(div => {
      div.style.backgroundColor = '';
      div.style.color = '';
    });

    // Apply style to the clicked button
    div.style.backgroundColor = 'white';
    div.style.color = 'black';
  });
});

const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', (ev) => {
  ev.preventDefault();

  // Find the selected button
  const selectedDiv = Array.from(allNumberDivs).find(div => div.style.backgroundColor === 'white');
  
  // Store selected vote only if a button is selected
  if (selectedDiv) {
    const selectedVote = selectedDiv.textContent; // Or any identifying attribute
    localStorage.setItem('selectedVote', selectedVote);
    window.location.href = 'thank-you-mobile.html';
  } else {
    alert("Please select a vote before submitting.");
  }
});
