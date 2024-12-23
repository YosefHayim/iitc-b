import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import ViewPost from "./pages/ViewPost";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-post/:id" element={<ViewPost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
