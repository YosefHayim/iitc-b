import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getPosts from "../api/getPosts";
import Post from "../types/Post";

const Home: React.FC = () => {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error, isSuccess } = useQuery<
    Post[],
    Error
  >({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

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
              key={post.id}
              className="bg-slate-400 p-[1em] flex flex-col items-center justify-start gap-[1em]"
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
                <button className="rounded-[0.5em] bg-slate-500 p-[0.5em] text-white  hover:text-black">
                  Edit Post
                </button>
                <button className="rounded-[0.5em] bg-slate-500 p-[0.5em] text-white  hover:text-black">
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

export default Home;
