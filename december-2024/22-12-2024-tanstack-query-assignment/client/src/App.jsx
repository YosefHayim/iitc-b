import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Topics from "./pages/Posts/Posts";
import ViewPost from "./pages/ViewPost/ViewPost";
import EditPost from "./pages/EditPost/EditPost";
import AddPost from "./pages/AddPost/AddPost";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import UserEdit from "./pages/UserEditProfile/UserEditProfile";
import UserEditProfile from "./pages/UserEditProfile/UserEditProfile";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/profile" element={<UserEditProfile />} />
        <Route path="/user/edit-profile" element={<UserEdit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Topics />} />
        <Route path="/view-post/:id" element={<ViewPost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
