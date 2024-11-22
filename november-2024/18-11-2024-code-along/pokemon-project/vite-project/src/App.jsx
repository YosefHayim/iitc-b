import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import CreateCustomPokemon from "./pages/CreateCustomPokemon/CreateCustomPokemon";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import SearchAppBar from "./components/TopNavbar/TopNavbar";
import AllPokemonCards from "./components/AllPokemonCards/AllPokemonCards";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import SearchForPokemon from "./pages/SearchForPokemon/SearchForPokemon";
import "./App.css";
import TemporaryDrawer from "./components/Drawer/Drawer";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";

function App() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <SearchAppBar setOpen={setOpen} setInput={setInput} />
      <TemporaryDrawer open={open} setOpen={setOpen} />
      <Routes>
        <Route path="/" element={<AllPokemonCards />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/createCustomPokemon" element={<CreateCustomPokemon />} />
        <Route path="/search/:input" element={<SearchForPokemon />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
