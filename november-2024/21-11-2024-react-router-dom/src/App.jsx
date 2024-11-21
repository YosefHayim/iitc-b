import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Articles from "./Pages/Articles/Articles.jsx";
import Tech from "./Pages/Tech/Tech.jsx";

// MUI Components
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/articles" element={<Articles />}>
            {/* Nested Routes inside  */}
            <Route path="news" element={<h1>This is news page</h1>} />
            <Route path="politics" element={<h1>This is politics page</h1>} />
            <Route path="sports" element={<h1>This is sports page</h1>} />
          </Route>
          <Route path="/tech/:id" element={<Tech />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
