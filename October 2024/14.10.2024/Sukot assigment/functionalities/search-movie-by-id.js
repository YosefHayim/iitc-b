import { movieCardsDivs, titlesContainers,domTitleTxt,searchResultContainer } from "./domEls.js"
import {createMovieCard} from "./dom-movies-cards.js"
import {apiKey} from "./env.js"
import {getData} from "./api-functions.js"

const searchMovieById = (inputValue) => {
  getData(`https://api.themoviedb.org/3/movie/${inputValue}?api_key=${apiKey}`, (data) => {
    titlesContainers.forEach(title => title.style.display = 'none');
    movieCardsDivs.forEach((container) => container.style.display =`none`)
    searchResultContainer.innerHTML = '';
    domTitleTxt.textContent = `Movie name is: ${data.title}`;
    const movieCard = createMovieCard(data);
    searchResultContainer.appendChild(movieCard)
})
}

export {searchMovieById}