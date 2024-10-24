import { homepageMainDiv } from "./storage-elements-dom.js";

const homepageContainerButtons = () => {
  homepageMainDiv.addEventListener('click', (ev) => {
    const img = ev.target.closest('img');

    if (img) {
      img.classList.toggle('grayscale');
    }
  });
  
};

export { homepageContainerButtons };
