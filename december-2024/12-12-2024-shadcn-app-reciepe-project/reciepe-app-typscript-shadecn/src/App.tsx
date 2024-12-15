import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Recipe from "./Pages/Recipe/Recipe";
import Settings from "./Pages/Settings/Settings";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ForgetPw from "./components/ForgetPw/ForgetPw";
import Search from "./Pages/Search/Search";
import Saved from "./Pages/Saved/Saved";
import News from "./Pages/News/News";
import AddRecipe from "./Pages/AddRecipe/AddRecipe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-page/dashboard" element={<Dashboard />} />
        <Route path="/recipe-page/sign-in" element={<SignIn />} />
        <Route path="/recipe-page/forget-pw" element={<ForgetPw />} />
        <Route path="/recipe-page/sign-up" element={<SignUp />} />
        <Route path="/recipe-page/recipe/:id" element={<Recipe />} />
        <Route path="/recipe-page/settings" element={<Settings />} />
        <Route path="/recipe-page/news" element={<News />} />
        <Route path="/recipe-page/saved" element={<Saved />} />
        <Route path="/recipe-page/search" element={<Search />} />
        <Route path="/recipe-page/add/recipe" element={<AddRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
