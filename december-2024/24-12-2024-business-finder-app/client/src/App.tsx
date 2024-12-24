import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import UserEdit from "./pages/UserEditProfile/UserEditProfile";
import UserEditProfile from "./pages/UserEditProfile/UserEditProfile";
import BusinessFeed from "./pages/BusinessFeed/BusinessFeed";
import ViewBusinessPost from "./pages/ViewBusinessPost/ViewBusinessPost";
import AddBusinessPost from "./pages/AddBusinessPost/AddBusinessPost";
import EditBusinessPost from "./pages/EditBusinessPost/EditBusinessPost";
import PlanPage from "./pages/PlanPage/PlanPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subscription-plans" element={<PlanPage />} />
        <Route path="/user/profile" element={<UserEditProfile />} />
        <Route path="/user/edit-profile" element={<UserEdit />} />
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