import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import addPost from "../api/getPosts";

const AddPost: React.FC = () => {
  const queryClient = useQueryClient();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    postContent: "",
    authorName: "",
  });

  // Mutation setup
  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      setFormData({ title: "", postContent: "", authorName: "" });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div>
      <h1>Add a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Post title..."
            required
          />
        </div>
        <div>
          <label htmlFor="postContent">Post Content</label>
          <input
            type="text"
            name="postContent"
            id="postContent"
            value={formData.postContent}
            onChange={handleChange}
            placeholder="Post content..."
            required
          />
        </div>
        <div>
          <label htmlFor="authorName">Author Name</label>
          <input
            type="text"
            name="authorName"
            id="authorName"
            value={formData.authorName}
            onChange={handleChange}
            placeholder="Author name..."
            required
          />
        </div>
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Creating..." : "Create Post"}
        </button>
        {mutation.isError && (
          <p>Error creating post: {mutation.error?.message}</p>
        )}
      </form>
    </div>
  );
};

export default AddPost;
