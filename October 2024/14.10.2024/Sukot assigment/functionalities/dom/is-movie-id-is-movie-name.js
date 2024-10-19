import { formData, sorryMessage } from "../dom/domEls.js";
import {searchMovieById} from "../get-api-calls/get-movie-by-id.js"
import {searchMovieByName} from "../get-api-calls/get-movie-by-name.js"


const isIdOrisName = () => {
  formData.forEach(form => {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const inputValue = form.querySelector('input').value.trim();
      
      if (inputValue.length === 0) {
        window.location.href =`error404.html`
        return
      }    

      if (/^[a-zA-Z]+$/.test(inputValue)) {
        searchMovieByName(inputValue)
        return
        
      } else if (/^[0-9]+$/.test(inputValue)) {
        searchMovieById(inputValue)
        return

      } else {
        window.location.href = `error404.html`
        return
      }
      
    });
  });

  
};

export {isIdOrisName}