import { useRef, useState } from "react";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  description?: string;
  [key: string]: any;
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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
  };

  return (
    <div className="flex flex-row items-center justify-center w-full bg-red-500">
      <h1>Learn Typescript TODO Exercise</h1>
      {dummyList.map((obj) => (
        <div key={obj.id}>
          <p>ID: {obj.id}</p>
          <p>Description: {obj.description}</p>
          <p>Text: {obj.text}</p>
          <p>Completed: {obj.completed.toString()}</p>
          <input type="checkbox" />
        </div>
      ))}
      <div>
        <label htmlFor="">Text Field</label>
        <input type="text" ref={textInputRef} required />
      </div>
      <div>
        <label htmlFor="">Description Field</label>
        <input type="text" ref={descriptionInputRef} required />
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
