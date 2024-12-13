import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Recipe from "./components/Recipe/Recipe";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-page/home" element={<Dashboard />}>
          <Route path="sign-up" element={<Settings />} />
          <Route path="sign-in" element={<Settings />} />
          <Route path="recipe" element={<Recipe />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
