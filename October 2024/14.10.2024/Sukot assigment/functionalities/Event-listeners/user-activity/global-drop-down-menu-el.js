import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { dropDownMenu } from "../../DOM/storage-elements-dom.js";
import { popularMoviesOfDay } from "../../get-api-calls/get-popular-movies-of-day.js";
import { popularMoviesOfWeek } from "../../get-api-calls/get-popular-movies-of-week.js";
// This function handles when the user is hovering on the home navigation bar, when he does the el navigates it based on that.
const handlePopularMoviesSelection = () => {
  dropDownMenu.addEventListener('click', (ev) => {
    ev.preventDefault();

    const pageClicked = ev.target.closest('a').textContent;

    // If the a tag he clicked is equal to popular of the day we pass him to the popular day page.
    if (pageClicked === 'Popular of the Day') {
      popularMoviesOfDay();
      displayAlertMessage('navigating-to-another-page')

    // else the a tag is equal to popular of the week we navigate him to that page.
    } else {
      popularMoviesOfWeek();
      displayAlertMessage('navigating-to-another-page')
    }
  });
};

export { handlePopularMoviesSelection };
