const alertMessagesTypes = (messageType, word) => {
  const messages = [
    // Success messages
    {
      messageType: "success-removed-movie",
      message: `Removed "${word}".`,
      backgroundColor: "green",
    },
    {
      messageType: "success-added-single-movie-to-fav-list",
      message: "Movie has been successfully added to favorite list",
      backgroundColor: "green",
    },
    {
      messageType: "success-removed-all-movies",
      message: `All movies have been removed`,
      backgroundColor: "green",
    },
    {
      messageType: "redirecting-next-page",
      message: `Next page: ${word}.`,
      backgroundColor: "green",
    },
    {
      messageType: "success-added-trailer",
      message: `Trailer for "${word}" added.`,
      backgroundColor: "green",
    },
    {
      messageType: "success-received-movie-data",
      message: `Data for "${word}" loaded.`,
      backgroundColor: "green",
    },
    {
      messageType: "success-added-movie-to-favorite-picks",
      message: `"${word}" added to favorite picks.`,
      backgroundColor: "green",
    },
    {
      messageType: "success-copy-movie-url",
      message: `Copied URL for "${word}".`,
      backgroundColor: "green",
    },
    {
      messageType: "navigating-to-another-page",
      message: `Redirecting...`,
      backgroundColor: "green",
    },
    {
      messageType: "redirecting-previous-page",
      message: `Back to ${word}.`,
      backgroundColor: "green",
    },

    // Error messages
    {
      messageType: "This-movie-has-no-youtube-url",
      message: "This movie has no trailer available",
      backgroundColor: "red",
    },
    {
      messageType: "Error",
      message: "Error occurred!",
      backgroundColor: "red",
    },
    {
      messageType: "no-genre-movies-found",
      message: `Didn't find any genre movie ID exist ${word}`,
      backgroundColor: "red",
    },
    {
      messageType: "already-in-favorite-list",
      message: `${word} Already added to favorite.`,
      backgroundColor: "red",
    },
    {
      messageType: "no-movie-id-found",
      message: `No movie card for "${word}".`,
      backgroundColor: "red",
    },
    {
      messageType: "cant-go-lower-than-1",
      message: `Can't go lower than ${word}.`,
      backgroundColor: "red",
    },
    {
      messageType: "error-fetch-movie-trailer",
      message: `No trailer for "${word}".`,
      backgroundColor: "red",
    },
    {
      messageType: "input-error",
      message: `Invalid: ${word}.`,
      backgroundColor: "red",
    },
    {
      messageType: "no-movie-data-exist",
      message: `No data for "${word}".`,
      backgroundColor: "red",
    },
    {
      messageType: "cannot-remove-empty-favorites",
      message: `Dear ${word}, there are no favorite movies to remove.`,
      backgroundColor: "red",
    },
    {
      messageType: "genre-card-id-not-found",
      message: `Dear User the movie genre ${word}, was not found in our database, our deep apology.`,
      backgroundColor: "red",
    },

    // Not working functionalities
    {
      messageType: "no-url-to-copy",
      message: `No URL for "${word}".`,
      backgroundColor: "#ffcd05",
    },
    {
      messageType: "no-youtube-video-available",
      message: `No trailer for "${word}".`,
      backgroundColor: "#ffcd05",
    },
    {
      messageType: "No trailer to watch",
      message: `No trailer for "${word}".`,
      backgroundColor: "#ffcd05",
    },
    {
      messageType: "No-trailer-found",
      message: `No trailer found for: "${word}".`,
      backgroundColor: "#ffcd05",
    },
    {
      messageType: "reached-last-page",
      message: `You have reached the last page ${word}.`,
      backgroundColor: "#ffcd05",
    },
  ];

  return messages.find((alert) => alert.messageType === messageType);
};

export { alertMessagesTypes };
