import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import UserEditProfile from "./pages/UserEditProfile/UserEditProfile";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import ViewBusinessPost from "./pages/ViewBusinessPost/ViewBusinessPost";
import EditBusinessPost from "./pages/EditBusinessPost/EditBusinessPost";
import AddBusinessPost from "./pages/AddBusinessPost/AddBusinessPost";
import BusinessFeed from "./pages/BusinessFeed/BusinessFeed";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/edit-profile" element={<UserEditProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<BusinessFeed />} />
        <Route path="/view-post/:id" element={<ViewBusinessPost />} />
        <Route path="/edit-post/:id" element={<EditBusinessPost />} />
        <Route path="/add-post" element={<AddBusinessPost />} />
      </Routes>
    </div>
  );
}

export default App;
