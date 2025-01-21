import { displayAlertMessage } from "../../dom/alert-message-dom.js";

// Copies the provided trailer URL to the clipboard, allowing the user to share or use it later.
const handleCopyToClipboard = async (trailerUrl) => {
  // Check if the document is focused before attempting to copy.
  if (document.hasFocus()) {
    try {
      // Copy the trailer URL to the clipboard.
      await navigator.clipboard.writeText(trailerUrl);
    } catch (err) {
      // Display an error message if the copy operation fails.
      displayAlertMessage("Something went wrong!");
    }
  } else {
    console.warn("Document not focused, skipping clipboard copy.");
  }
};

export { handleCopyToClipboard };
