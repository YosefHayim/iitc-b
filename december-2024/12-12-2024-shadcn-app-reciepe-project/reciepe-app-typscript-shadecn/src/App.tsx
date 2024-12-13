import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Recipe from "./components/Recipe/Recipe";
import Settings from "./components/Settings/Settings";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ForgetPw from "./components/ForgetPw/ForgetPw";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-page/dashboard" element={<Dashboard />} />
        <Route path="/recipe-page/sign-in" element={<SignIn />} />
        <Route path="/recipe-page/forget-pw" element={<ForgetPw />} />
        <Route path="/recipe-page/sign-up" element={<SignUp />} />
        <Route path="/recipe-page/recipe" element={<Recipe />} />
        <Route path="/recipe-page/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
