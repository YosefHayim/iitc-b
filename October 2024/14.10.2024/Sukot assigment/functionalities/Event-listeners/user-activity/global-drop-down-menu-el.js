import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { dropDownMenu } from "../../DOM/storage-elements-dom.js";
import { popularMoviesOfDay } from "../../get-api-calls/get-popular-movies-of-day.js";
import { popularMoviesOfWeek } from "../../get-api-calls/get-popular-movies-of-week.js";

const handlePopularMoviesSelection = () => {
  dropDownMenu.addEventListener('click', (ev) => {
    ev.preventDefault();

    const pageClicked = ev.target.closest('a').textContent;

    if (pageClicked === 'Popular of the Day') {
      popularMoviesOfDay();
      displayAlertMessage('navigating-to-another-page')

    } else {
      popularMoviesOfWeek();
      displayAlertMessage('navigating-to-another-page')
    }
  });
};

export { handlePopularMoviesSelection };
