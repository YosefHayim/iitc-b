import { formData } from "../dom/domEls.js";
import {searchMovieById} from "../get-api-calls/get-movie-by-id.js"
import {searchMovieByName} from "../get-api-calls/get-movie-by-name.js"


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
        return
      } else if (/^[0-9]+$/.test(inputValue)) {
        searchMovieById(inputValue)
        return

      }
    });
  });
};

export {isIdOrisName}