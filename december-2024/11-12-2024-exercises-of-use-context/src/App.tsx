import React, { useState, createContext } from "react";
import "./App.css";
import ThemeDisplay from "./components/ThemeDisplay";
import ButtonIncrease from "./components/ButtonIncrease";

// Define the type for the context value
interface ThemeContextType {
  themeColor: string;
  setThemeColor: React.Dispatch<React.SetStateAction<string>>;
}

interface ThemeCountContext {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

// Create the ThemeContext with a default value
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const countContext = createContext<ThemeCountContext | undefined>(
  undefined
);

function App() {
  const [themeColor, setThemeColor] = useState<string>("Light");
  const [count, setCount] = useState<number>(0);

  return (
    <countContext.Provider value={{ count, setCount }}>
      <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
        <div>
          <h1>Exercises of useContext</h1>
          <ThemeDisplay />
          <ButtonIncrease />
        </div>
      </ThemeContext.Provider>
    </countContext.Provider>
  );
}

export default App;
