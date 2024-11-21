import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateCustomPokemon from "./pages/CreateCustomPokemon/CreateCustomPokemon";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import SearchAppBar from "./components/TopNavbar/TopNavbar";
import AllPokemonCards from "./components/AllPokemonCards/AllPokemonCards";
import Home from "./pages/Home/Home";
import TemporaryDrawer from "./components/Drawer/Drawer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    const input = e.target.value;
    setInput(input);
  };

  return (
    <BrowserRouter>
      <SearchAppBar onChange={handleInputChange} />
      <TemporaryDrawer />
      <Routes>
        <Route path="/" element={<AllPokemonCards input={input} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/createCustomPokemon" element={<CreateCustomPokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
