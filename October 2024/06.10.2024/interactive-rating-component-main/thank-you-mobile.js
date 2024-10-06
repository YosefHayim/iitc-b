// Retrieve the vote count from localStorage
const countVote = localStorage.getItem('selectedVote');

// Check if resultVote div exists
const resultVote = document.querySelector('div .result-vote');
if (resultVote) {
  resultVote.textContent = `You selected ${countVote} out of 5`;
} else {
  console.error("resultVote element not found!");
}
