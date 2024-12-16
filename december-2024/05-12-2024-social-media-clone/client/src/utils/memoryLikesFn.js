const memoryLikesFn = (postId) => {
  if (!localStorage.getItem("postLikesByIds")) {
    localStorage.setItem("postLikesByIds", JSON.stringify([]));
  }

  const savedLikes = new Set(
    JSON.parse(localStorage.getItem("postLikesByIds")),
  );

  if (savedLikes.has(postId)) {
    // Remove the like
    savedLikes.delete(postId);
  } else {
    // Add the like
    savedLikes.add(postId);
  }

  // Update localStorage
  localStorage.setItem("postLikesByIds", JSON.stringify([...savedLikes]));
};

export default memoryLikesFn;
