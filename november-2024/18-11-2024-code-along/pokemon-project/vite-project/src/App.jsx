import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCustomPokemon from "./pages/CreateCustomPokemon/CreateCustomPokemon";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import "./App.css";
import SearchAppBar from "./components/TopNavbar/TopNavbar";
import AllPokemonCards from "./components/AllPokemonCards/AllPokemonCards";
import Home from "./pages/Home/Home";
import TemporaryDrawer from "./components/Drawer/Drawer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  const handleInputChange = (inputValue) => {
    console.log(inputValue);
  };

  return (
    <BrowserRouter>
      <SearchAppBar handleInputChange={handleInputChange} />
      <TemporaryDrawer />
      <Routes>
        <Route>
          <Route path="/" element={<AllPokemonCards />} />
          <Route path="home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route
            path="/createCustomPokemon"
            element={<CreateCustomPokemon />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
