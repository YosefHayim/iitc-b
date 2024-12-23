import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getPostById from "../../api/posts/getPostById";

const ViewPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostById(id),
  });

  if (isLoading) {
    return <p>Loading post...</p>;
  }

  if (isError || !post) {
    return (
      <p>
        <strong>Error:</strong>{" "}
        {error?.message || "Post not found or failed to load."}
      </p>
    );
  }

  return (
    <div className="view-post">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-lg mt-2">{post.postContent}</p>
      <p className="text-sm text-gray-600 mt-4">
        <strong>Author:</strong> {post.authorName}
      </p>
    </div>
  );
};

export default ViewPost;
