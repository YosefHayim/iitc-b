import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import getPostById from "../../api/posts/getPostById";
import updatePostById from "../../api/posts/updatePostById";

const EditPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<{
    title: string;
    postContent: string;
  } | null>(null);

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostById(id),
    onSuccess: (data) =>
      setFormData({ title: data.title, postContent: data.postContent }),
  });

  const mutation = useMutation(() => updatePostById(id));

  if (isLoading) {
    return <p>Loading post...</p>;
  }

  if (isError || !post) {
    return (
      <p>
        <strong>Error:</strong>
        {error?.message || "Post not found or failed to load."}
      </p>
    );
  }

  if (!formData) {
    return <p>Preparing form...</p>;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev!, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="edit-post">
      <h1 className="text-2xl font-bold">Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="postContent"
            value={formData.postContent}
            onChange={handleChange}
            className="textarea-field"
          />
        </div>
        <button type="submit" className="btn-save">
          Save Changes
        </button>
      </form>
      {mutation.isError && <p>Error saving post: {mutation.error.message}</p>}
    </div>
  );
};

export default EditPost;
