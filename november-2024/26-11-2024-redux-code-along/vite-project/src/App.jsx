import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import TodoList from "./components/TodoList.jsx";

function App() {
  return (
    <>
      <Provider store={store} />
      <div>
        <h2>React To Do List</h2>
        <TodoList />
      </div>
      <Provider />
    </>
  );
}

export default App;
