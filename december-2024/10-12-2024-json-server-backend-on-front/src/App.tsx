import { useEffect, useState } from "react";
import "./App.css";
import { Task } from "./types";
import axios, { AxiosResponse } from "axios";

function App() {
  const [posts, setPosts] = useState<Task[]>([]);

  const fetchData = async () => {
    try {
      const res: AxiosResponse<Task[]> = await axios.get(
        "http://localhost:3000/tasks"
      );
      if (res.data) {
        setPosts(res.data);
        console.log(res.data); // Log the data directly
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Learning JSON Server on Frontend</h1>
        <div>
          <div className="flex gap-[1em] mt-[1em] ml-[1em]">
            <div>
              <select name="status" id="status">
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div>
              <select name="priority" id="priority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
          <ul className="mt-[1em] flex flex-col items-start justify-center ml-[1em] gap-[1em]">
            {posts.map((post) => (
              <li key={post.id}>
                <p>Title: {post.title}</p>
                <p>Description: {post.description}</p>
                <p>Due Date: {post.dueDate}</p>
                <p>Priority: {post.priority}</p>
                <p>Status: {post.status}</p>
                <button>Delete Task: {post.title}</button>
                <button>Edit Task: {post.title}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
