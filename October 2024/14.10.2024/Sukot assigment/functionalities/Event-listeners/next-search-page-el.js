import { searchPaginationDiv } from "../DOM/storage-elements-dom.js";

const clickSearchPageBtn = () => {
  searchPaginationDiv.addEventListener('click', (ev) => {
    ev.preventDefault();

    const button = ev.target.closest('button');

    if (button.classList.contains('next-page')) {
      console.log(`clicked on next page`);
      
      
    } else {
      console.log(`clicked on previous page`);
      
    }
  });
};

export { clickSearchPageBtn };
