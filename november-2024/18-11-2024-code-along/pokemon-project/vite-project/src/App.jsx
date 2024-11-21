import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import CreateCustomPokemon from "./pages/CreateCustomPokemon/CreateCustomPokemon";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import "./App.css";
import SearchAppBar from "./components/TopNavbar/TopNavbar";
import TemporaryDrawer from "./components/Drawer/Drawer";

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
          <Route path="/" element={<Homepage />} />
          <Route
            path="/createCustomPokemon"
            element={<CreateCustomPokemon />}
          />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
