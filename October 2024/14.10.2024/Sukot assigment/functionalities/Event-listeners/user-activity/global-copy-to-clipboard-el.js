const handleCopyToClipboard = async (trailerUrl) => {
  try {
    // Copy the trailer URL to the clipboard
    await navigator.clipboard.writeText(trailerUrl);

  } catch (err) {
    console.error('Failed to copy trailer URL', err);
  }
}

export { handleCopyToClipboard };
