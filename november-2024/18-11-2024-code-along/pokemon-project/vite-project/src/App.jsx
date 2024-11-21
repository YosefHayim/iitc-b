import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCustomPokemon from "./pages/CreateCustomPokemon/CreateCustomPokemon";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import "./App.css";
import SearchAppBar from "./components/TopNavbar/TopNavbar";
import AllPokemonCards from "./components/AllPokemonCards/AllPokemonCards";
import Home from "./pages/Home/Home";

function App() {
  const handleInputChange = (inputValue) => {
    console.log(inputValue);
  };

  return (
    <BrowserRouter>
      <SearchAppBar handleInputChange={handleInputChange} />
      <Routes>
        <Route>
          <Route path="/" element={<AllPokemonCards />} />
          <Route
            path="/createCustomPokemon"
            element={<CreateCustomPokemon />}
          />
          <Route path="Home" element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
