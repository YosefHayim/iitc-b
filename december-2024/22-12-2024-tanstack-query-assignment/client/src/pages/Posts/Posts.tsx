import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import getPosts from "../../api/posts/getPosts";
import deletePost from "../../api/posts/deletePosts";

const Posts: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Fetch posts
  const { isLoading, isError, data, error, isSuccess } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  // Mutation for deleting a post
  const mutation = useMutation<void, Error, number>({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]); // Refresh posts after successful deletion
    },
  });

  // Handle button clicks
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number | string
  ): void => {
    const btn = (e.target as HTMLElement).closest("button");

    if (!btn) return;

    if (btn.innerText === "View Post") {
      navigate(`/view-post/${id}`);
    } else if (btn.innerText === "Edit Post") {
      navigate(`/edit-post/edit/${id}`);
    } else if (btn.innerText === "Delete Post") {
      mutation.mutate(id);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <p>
        <strong>Error:</strong> {error?.message || "Failed to load posts."}
      </p>
    );
  }

  return (
    <div>
      {isSuccess && data && data.length > 0 ?
        <ul className="flex flex-col items-center justify-start gap-[2em]">
          {data.map((post) => (
            <li
              key={post._id}
              className="bg-slate-400 p-[1em] flex flex-col items-center justify-start gap-[1em]"
              onClick={(e) => handleClick(e, post._id)}
            >
              <h3 className="text-[0.75em] font-bold">Title: {post.title}</h3>
              <p>Content: {post.postContent}</p>
              <p className="w-full">
                <strong>Author:</strong> {post.authorName}
              </p>
              <div className="flex flex-row items-center ml-[1em] gap-[0.5em]">
                <button className="rounded-[0.5em] bg-slate-500 p-[0.5em] text-white hover:text-black">
                  View Post
                </button>
                <button className="rounded-[0.5em] bg-slate-500 p-[0.5em] text-white hover:text-black">
                  Edit Post
                </button>
                <button className="rounded-[0.5em] bg-slate-500 p-[0.5em] text-white hover:text-black">
                  Delete Post
                </button>
              </div>
            </li>
          ))}
        </ul>
      : <p>No posts available.</p>}
    </div>
  );
};

export default Posts;
