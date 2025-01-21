import { displayAlertMessage } from "../../dom/alert-message-dom.js";
import { dropDownMenu } from "../../dom/storage-elements-dom.js";
import { popularMoviesOfDay } from "../../get-api-calls/get-popular-movies-of-day.js";
import { popularMoviesOfWeek } from "../../get-api-calls/get-popular-movies-of-week.js";

// Handles user clicks on the home navigation dropdown to navigate between "Popular of the Day" and "Popular of the Week" pages.
const handlePopularMoviesSelection = () => {
  dropDownMenu.addEventListener("click", (ev) => {
    ev.preventDefault();

    // Get the text content of the clicked link (a tag).
    const pageClicked = ev.target.closest("a").textContent;

    // If "Popular of the Day" is clicked, navigate to that page.
    if (pageClicked === "Popular of the Day") {
      popularMoviesOfDay();
      displayAlertMessage("navigating-to-another-page");

      // If "Popular of the Week" is clicked, navigate to that page.
    } else {
      popularMoviesOfWeek();
      displayAlertMessage("navigating-to-another-page");
    }
  });
};

export { handlePopularMoviesSelection };
