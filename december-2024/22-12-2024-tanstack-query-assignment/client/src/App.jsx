import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Topics from "./pages/Topics/Topics";
import ViewPost from "./pages/ViewPost/ViewPost";
import EditPost from "./pages/EditPost/EditPost";
import AddPost from "./pages/AddPost/AddPost";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/view-post/:id" element={<ViewPost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
