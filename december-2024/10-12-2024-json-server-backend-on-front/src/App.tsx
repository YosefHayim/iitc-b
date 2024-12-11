import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import axios, { AxiosResponse } from "axios";
import { Task } from "./types";

// Create the context
const TaskContext = createContext<Task[]>([]);

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

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const button = (e.target as HTMLElement).closest("button");
    const parentDiv = button?.parentElement;

    if (button?.innerText.includes("Delete")) {
      if (parentDiv) {
        parentDiv.remove();
      }
    }

    if (button?.innerText.includes("Edit")) {
      if (parentDiv) {
        parentDiv.setAttribute("contenteditable", "true");
        parentDiv.focus();
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TaskContext.Provider value={posts}>
      <div onClick={handleClick}>
        <h1>Learning JSON Server on Frontend</h1>
        <TaskList />
      </div>
    </TaskContext.Provider>
  );
}

// Consume the context
function TaskList() {
  const tasks = useContext(TaskContext);

  return (
    <ul className="mt-[1em] flex flex-col items-start justify-center ml-[1em] gap-[1.2em]">
      {tasks.map((task) => (
        <li key={task.id}>
          <p>Title: {task.title}</p>
          <p>Description: {task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
          <button className="bg-gray-500 rounded-[0.5em]">
            Delete Task: {task.title}
          </button>
          <button className="bg-gray-500 rounded-[0.5em]">
            Edit Task: {task.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default App;
