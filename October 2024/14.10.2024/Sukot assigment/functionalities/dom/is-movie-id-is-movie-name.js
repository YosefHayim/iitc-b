import { formData } from "../dom/domEls.js";
import { searchMovieById } from "../get-api-calls/get-movie-by-id.js";
import { searchMovieByName } from "../get-api-calls/get-movie-by-name.js";

const isIdOrisName = () => {
  formData.forEach(form => {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const inputValue = form.querySelector('input').value.trim();

      // Redirect to error page if input is empty
      if (!inputValue) {
        window.location.href = `error404.html`;
        return;
      }

      // Check if input is a name (letters only)
      if (/^[a-zA-Z]+$/.test(inputValue)) {
        searchMovieByName(inputValue);
        return;

      // Check if input is an ID (numbers only)
      } else if (/^[0-9]+$/.test(inputValue)) {
        searchMovieById(inputValue);
        return;

      // Redirect to error page if input is invalid
      } else {
        window.location.href = `error404.html`;
        return;
      }
    });
  });
};

export { isIdOrisName };
