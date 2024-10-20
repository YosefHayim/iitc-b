import { alertMessage } from "../../DOM/alert-message-dom.js";
import { favMoviesContainer } from "../../DOM/storage-elements-dom.js";

const handlePlayButtonClick  = () => {
  favMoviesContainer.addEventListener('click', (ev) => {

    const favPlayImg = ev.target.closest('.fav-play-button-img');
    if (favPlayImg) {
      // Set the prevent default here because the images and play buttons has a tags with the youtube trailers so we are not stopping the default beavhior of it 
      ev.preventDefault();
      if (favPlayImg.src && favPlayImg.src.includes('no-trailer-available-img')) {
        let message = `This movie doesn't have a trailer yet.`;
        let backgroundColor = `#ffcd05`;
        alertMessage(message, backgroundColor);
      }
    }
  });
}

export {handlePlayButtonClick }