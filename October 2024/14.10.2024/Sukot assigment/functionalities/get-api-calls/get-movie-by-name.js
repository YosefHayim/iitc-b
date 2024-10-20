import { movieCardsDivs, titlesContainers, navbarDesktop, mainDiv, aboutUsSection, feedbackFormPage } from "../DOM/storage-elements-dom.js";
import { createMovieCard } from "../DOM/homepage-movie-cards-dom.js";
import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { alertMessage } from "../DOM/alert-message-dom.js";


const searchMovieByName = (inputValue,count) => {
  let defaultPage = 1

  if (count < 1) {
    let message = `You can't go to page 0`
    let backgroundColor = `red`
    alertMessage(message,backgroundColor)
    return;
  }

  getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=${count ? count : defaultPage}`, (data) => {
  // Fetch movie data based on the input value

    console.log(data);

    if (!data) {
      redirectToErrorPage()
      return;
    }

    // Clear existing titles and movie card containers
    // Ensure only titles that are not search results are removed
    titlesContainers.forEach(title => {
      if (!title.classList.contains('search-results-name')) {
        title.remove();
      }
    movieCardsDivs.forEach(container => container.remove());

    });

    // Remove sections like 'About Us' and 'Feedback Form' if they exist
    if (aboutUsSection) {
      aboutUsSection.remove();
    }

    if (feedbackFormPage) {
      feedbackFormPage.remove();
    }

    // Check if search results title and container already exist
    let searchResultTitle = mainDiv.querySelector('.search-results-name');
    let searchResultContainer = mainDiv.querySelector('.search-results-container');

    // Create search results title and container if they don't exist
    if (!searchResultTitle && !searchResultContainer) {
      searchResultTitle = document.createElement('div');
      searchResultTitle.classList.add('search-results-name');
      searchResultTitle.style.display = 'flex';

      searchResultContainer = document.createElement('div');
      searchResultContainer.classList.add('search-results-container');

      // Insert the title and container into the DOM
      navbarDesktop.insertAdjacentElement('afterend', searchResultTitle);
      searchResultTitle.insertAdjacentElement('afterend', searchResultContainer);
    }

    // Update the search result title with the total results and movie name
    searchResultTitle.style.display = 'flex';

    // Makes the first letter in the input value uppercase and than add the rest of it.
    let result = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)

    searchResultTitle.innerHTML = `<h1>Total results: ${data.total_results}<br> page:<br>${data.page} / ${data.total_pages}</h1>`;

    // Clear the container before appending new movie cards
    searchResultContainer.innerHTML = '';

    // Create and append movie cards for each result
    data.results.forEach(movie => {
      const movieCard = createMovieCard(movie);
      searchResultContainer.appendChild(movieCard);
    });
  });
  
};

export { searchMovieByName };
