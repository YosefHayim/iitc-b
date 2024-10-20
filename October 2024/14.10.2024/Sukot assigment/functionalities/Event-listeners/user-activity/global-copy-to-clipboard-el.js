import { displayAlertMessage } from "/IITC-B/October 2024/14.10.2024/Sukot assigment/functionalities/DOM/alert-message-dom.js";

const handleCopyToClipboard = (shareButton, trailerUrl) => {

  shareButton.addEventListener('click', async (ev) => {
    ev.preventDefault();

    try {
      await navigator.clipboard.writeText(trailerUrl);
      let message = 'Trailer URL Copied';
      let backgroundColor = `green`
      displayAlertMessage(message,backgroundColor);

    } catch (err) {
      console.error('Failed to copy trailer URL', err);
      let message = 'Failed to copy URL';
      let backgroundColor = `red`
      displayAlertMessage(message,backgroundColor);
    }
  });
}

export { handleCopyToClipboard };
