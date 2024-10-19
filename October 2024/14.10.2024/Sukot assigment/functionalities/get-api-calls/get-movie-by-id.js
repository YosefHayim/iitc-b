import { movieCardsDivs, titlesContainers, domTitleTxt, searchResultContainer, searchResultTitle } from "../dom/domEls.js";
import { createMovieCard } from "../dom/dom-movies-cards.js";
import { apiKey } from "../env.js";
import { getData } from "../api-functions.js";

const searchMovieById = (inputValue) => {
  getData(`https://api.themoviedb.org/3/movie/${inputValue}?api_key=${apiKey}`, (data, response) => {

    console.log(data);
    if (!data || (response && response.status === 404)) {
      window.location.href = 'error404.html';
      return;
    }

    titlesContainers.forEach(title => title.remove());
    movieCardsDivs.forEach((container) => container.remove());

    searchResultContainer.innerHTML = '';
    searchResultTitle.style.display = `flex`;
    searchResultTitle.innerHTML = `
      <h1>The ID of movie ${inputValue}, movie name is: ${data.title}</h1>`;

    const movieCard = createMovieCard(data);
    searchResultContainer.appendChild(movieCard);
  });
};

export { searchMovieById };
