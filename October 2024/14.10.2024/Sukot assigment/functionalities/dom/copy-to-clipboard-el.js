import { alertMessage } from "./alert-message-dom.js";

const copyToClipboard = (shareButton, trailerUrl) => {

  shareButton.addEventListener('click', async (ev) => {
    ev.preventDefault();

    try {
      await navigator.clipboard.writeText(trailerUrl);
      let message = 'Trailer URL Copied';
      alertMessage(message);

    } catch (err) {
      console.error('Failed to copy trailer URL', err);
      let message = 'Failed to copy URL';
      alertMessage(message);
    }
  });
}

export { copyToClipboard };
