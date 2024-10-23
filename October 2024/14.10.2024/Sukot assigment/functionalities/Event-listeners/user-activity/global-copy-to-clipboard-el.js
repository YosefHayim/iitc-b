import {displayAlertMessage} from "../../DOM/alert-message-dom.js"
// This function is receiving the trailerUrl as parameter and allowing copying it for the user allowing him to either send it to someone or just paste it when he likes.
const handleCopyToClipboard = async (trailerUrl) => {
  if (document.hasFocus()) {
    try {
      await navigator.clipboard.writeText(trailerUrl);
    } catch (err) {
      displayAlertMessage('Something went wrong!')
    }
  } else {
    console.warn("Document not focused, skipping clipboard copy.");
  }
};

export {handleCopyToClipboard}
