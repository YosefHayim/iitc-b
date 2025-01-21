const memorySavePostsFn = (postId) => {
  if (!localStorage.getItem("savePostsByIds")) {
    localStorage.setItem("savePostsByIds", JSON.stringify([]));
  }

  const savedPosts = new Set(
    JSON.parse(localStorage.getItem("savePostsByIds")),
  );

  if (savedPosts.has(postId)) {
    // Remove the like
    savedPosts.delete(postId);
  } else {
    // Add the like
    savedPosts.add(postId);
  }

  // Update localStorage
  localStorage.setItem("savePostsByIds", JSON.stringify([...savedPosts]));
};

export default memorySavePostsFn;
