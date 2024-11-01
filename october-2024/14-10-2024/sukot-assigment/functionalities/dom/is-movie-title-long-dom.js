// Receives the movie title from the API call and checks how many words it contains.
// Example: 'The Lord of the Rings The Return of the King' -> 'The Lord' (if more than 4 words)
// Example: 'Harry Potter and the Philosopher's Stone' -> 'Harry Potter and' (if 4 or fewer words)
const isNameToLong = (title) => {
  // If the title has more than 4 words, shorten it to the first 2 words.
  if (title.split(" ").length > 4) {
    const movieName = title.split(" ").slice(0, 2).join(" ");
    return movieName;

    // If the title has 4 or fewer words, shorten it to the first 3 words.
  } else {
    const movieName = title.split(" ").slice(0, 3).join(" ");
    return movieName;
  }
};

export { isNameToLong };
