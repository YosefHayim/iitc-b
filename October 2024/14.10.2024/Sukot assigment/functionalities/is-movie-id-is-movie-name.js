import { formData } from "./domEls.js";
import {searchMovieById} from "./search-movie-by-id.js"
import {searchMovieByName} from "./search-movie-by-name.js"


const isIdOrisName = () => {
  if (!window.location.href.includes('index.html')) {
    window.location.href = 'index.html';
    return;
  }

  formData.forEach(form => {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const inputValue = form.querySelector('input').value.trim();

      if (/^[a-zA-Z]+$/.test(inputValue)) {
        searchMovieByName(inputValue)
      } else if (/^[0-9]+$/.test(inputValue)) {
        searchMovieById(inputValue)

      }
    });
  });
};

export {isIdOrisName}