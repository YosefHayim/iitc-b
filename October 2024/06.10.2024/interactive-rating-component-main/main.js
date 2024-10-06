const allNumberDivs = document.querySelectorAll('.number-one, .number-two, .number-three, .number-four, .number-five');

let countVote = 0;

allNumberDivs.forEach(div => {
  div.addEventListener('click', (ev) => {
    ev.preventDefault();    
    div.style.backgroundColor = 'white';
    div.style.color = 'black';
    countVote++;
    if (countVote >= 6) {
      alert("You can't rate more than 5, please click submit.");
    }
  });
});

// No need to check for submitBtn's existence since we know it's on the page
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  
  // Store the vote count in localStorage
  localStorage.setItem('selectedVote', countVote);
  
  // Navigate to the thank-you page
  window.location.href = 'thank-you-mobile.html';
});
