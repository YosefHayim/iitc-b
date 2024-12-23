import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { randomId } from "../utils/randomId";
import addPosts from "../api/addPosts";
import { AddPostFn, PostFormData } from "../types/types";

const AddPost: React.FC = () => {
  const queryClient = useQueryClient();

  // Initialize form state with an `id`
  const [formData, setFormData] = useState<PostFormData>({
    id: randomId(),
    title: "",
    postContent: "",
    authorName: "",
  });

  // Mutation setup
  const mutation = useMutation<void, Error, PostFormData>({
    mutationFn: addPosts as AddPostFn,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      setFormData({
        id: randomId(),
        title: "",
        postContent: "",
        authorName: "",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Extract form data manually
    const form = e.currentTarget;
    const title = (form.title as HTMLInputElement).value;
    const postContent = (form.postContent as HTMLInputElement).value;
    const authorName = (form.authorName as HTMLInputElement).value;

    // Merge extracted values with the current formData state
    const updatedFormData = { ...formData, title, postContent, authorName };

    console.log("Submitting data:", updatedFormData);
    mutation.mutate(updatedFormData);
  };

  return (
    <div>
      <h1>Add a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Post Title</label>
          <input
            className="bg-gray-400 placeholder:text-gray-700"
            type="text"
            name="title"
            id="title"
            placeholder="Post title..."
            required
          />
        </div>
        <div>
          <label htmlFor="postContent">Post Content</label>
          <input
            className="bg-gray-400 placeholder:text-gray-700"
            type="text"
            name="postContent"
            id="postContent"
            placeholder="Post content..."
            required
          />
        </div>
        <div>
          <label htmlFor="authorName">Author Name</label>
          <input
            className="bg-gray-400 placeholder:text-gray-700"
            type="text"
            name="authorName"
            id="authorName"
            placeholder="Author name..."
            required
          />
        </div>
        <button
          type="submit"
          disabled={mutation.isLoading}
          className="bg-gray-500 hover:text-white p-[0.5em] rounded-[0.2em]"
        >
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
