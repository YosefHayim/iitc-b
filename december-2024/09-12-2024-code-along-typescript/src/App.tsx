import { useRef, useState } from "react";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  description?: string;
}

function App() {
  const textInputRef = useRef<HTMLInputElement | null>(null);
  const descriptionInputRef = useRef<HTMLInputElement | null>(null);
  const [dummyList, setDummyList] = useState<Todo[]>([
    {
      id: "1",
      text: "text 1",
      completed: false,
      description: "this is description text 1",
    },
    {
      id: "2",
      text: "text 2",
      completed: false,
      description: "this is description text 2",
    },
  ]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id?: string) => {
    const buttonValue = e.currentTarget.value;

    const textInput = textInputRef.current?.value;
    const description = descriptionInputRef.current?.value;

    if (buttonValue === "Add todo") {
      if (textInput && description) {
        setDummyList((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            text: textInput,
            completed: false,
            description,
          },
        ]);
      } else {
        alert("You can't add an empty task.");
      }
    }

    if (buttonValue === "Remove all") {
      setDummyList([]);
    }

    if (buttonValue === "Remove Task" && id) {
      const updatedList = dummyList.filter((task) => task.id !== id);
      setDummyList(updatedList);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-red-500 p-4">
      <h1>Learn Typescript TODO Exercise</h1>
      <div>
        <label>Status:</label>
        <select name="statusTodos" id="statusTodos">
          <option value="completed">Completed</option>
          <option value="notCompleted">Not Completed</option>
        </select>
      </div>
      {dummyList.map((obj) => (
        <div key={obj.id} className="todo-item">
          <p>ID: {obj.id}</p>
          <p>Description: {obj.description}</p>
          <p>Text: {obj.text}</p>
          <p>Completed: {obj.completed.toString()}</p>
          <input type="checkbox" checked={obj.completed} readOnly />
          <button value="Remove Task" onClick={(e) => handleClick(e, obj.id)}>
            Remove Task
          </button>
        </div>
      ))}
      <div>
        <label htmlFor="textField">Text Field:</label>
        <input type="text" id="textField" ref={textInputRef} required />
      </div>
      <div>
        <label htmlFor="descriptionField">Description Field:</label>
        <input
          type="text"
          id="descriptionField"
          ref={descriptionInputRef}
          required
        />
      </div>
      <button value="Add todo" onClick={handleClick}>
        Add todo
      </button>
      <button value="Remove all" onClick={handleClick}>
        Remove all
      </button>
    </div>
  );
}

export default App;
