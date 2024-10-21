import {displayAlertMessage} from "../../DOM/alert-message-dom.js"

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
