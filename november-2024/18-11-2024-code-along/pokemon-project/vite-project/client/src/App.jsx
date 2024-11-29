import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import CreateCustomPokemon from "./pages/CreateCustomPokemon/CreateCustomPokemon";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import BurgerIcon from "./components/BurgerIcon/BurgerIcon";
import AllPokemonCards from "./components/AllPokemonCards/AllPokemonCards";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import SearchForPokemon from "./pages/SearchForPokemon/SearchForPokemon";
import TemporaryDrawer from "./components/Drawer/Drawer";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import MovesPage from "./pages/MovesPage/MovesPage";
import EvolutionsPage from "./pages/EvolutionsPage/EvolutionsPage";
import LocationsPage from "./pages/LocationsPage/LocationsPage";

function App() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <BurgerIcon setOpen={setOpen} />
      <TemporaryDrawer open={open} setOpen={setOpen} />
      <Routes>
        <Route path="/" element={<Home setInput={setInput} />} />
        <Route path="/pokedex" element={<AllPokemonCards />} />
        <Route path="/moves" element={<MovesPage />} />
        <Route path="/evolutions" element={<EvolutionsPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/createCustomPokemon" element={<CreateCustomPokemon />} />
        <Route path="/search/:input" element={<SearchForPokemon />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
