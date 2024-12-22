import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import addPost from "../api/getPosts";
import { randomId } from "../utils/randomId";

interface FormData {
  title: string;
  postContent: string;
  authorName: string;
}

// Define the type for the addPost function
type AddPostFn = (data: FormData) => Promise<void>;

const AddPost: React.FC = () => {
  const queryClient = useQueryClient();

  // Form state
  const [formData, setFormData] = useState<FormData>({
    title: "",
    postContent: "",
    authorName: "",
  });

  // Mutation setup
  const mutation = useMutation<void, Error, FormData>({
    mutationFn: addPost as AddPostFn, // Ensures the mutation function adheres to the defined type
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      setFormData({ title: "", postContent: "", authorName: "" });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const id = randomId();
    const title = formData.get("title") as string;
    const postContent = formData.get("postContent") as string;
    const authorName = formData.get("authorName") as string;

    console.log(title, postContent, authorName);

    mutation.mutate({ title, postContent, authorName });
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
