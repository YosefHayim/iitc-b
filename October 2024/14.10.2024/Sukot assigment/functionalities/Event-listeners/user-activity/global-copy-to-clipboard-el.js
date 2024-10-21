const handleCopyToClipboard = async (trailerUrl) => {
  if (document.hasFocus()) {
    try {
      await navigator.clipboard.writeText(trailerUrl);
    } catch (err) {
      console.error('Failed to copy trailer URL', err);
    }
  } else {
    console.warn("Document not focused, skipping clipboard copy.");
  }
};

export {handleCopyToClipboard}
