const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("Successfully Copied to Clipboard!");
  } catch (error) {
    console.error("Error copying to clipboard:", error);
    alert("Failed to Copy!");
  }
};

export default copyToClipboard;
