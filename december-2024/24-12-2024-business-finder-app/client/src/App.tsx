import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import BusinessFeed from "./pages/BusinessFeed/BusinessFeed";
import Contact from "./pages/Contact/Contact";
import ViewBusinessPost from "./pages/ViewBusinessPost/ViewBusinessPost";
import AddBusinessPost from "./pages/AddBusinessPost/AddBusinessPost";
import EditBusinessPost from "./pages/EditBusinessPost/EditBusinessPost";
import PlanPage from "./pages/PlanPage/PlanPage";
import ViewBusinessOwner from "./pages/ViewBusinessOwner/ViewBusinessOwner";
import Privacy from "./pages/Privacy/Privacy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import GoogleCallback from "./pages/GoogleCallback/GoogleCallback";
import Companies from "./pages/Companies/Companies";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-feed" element={<BusinessFeed />} />
        <Route path="/search-job" element={<SearchPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/auth/google/callback" element={<GoogleCallback />} />
        <Route path="/subscription-plans" element={<PlanPage />} />
        <Route path="/user/profile/:id" element={<ViewBusinessOwner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<BusinessFeed />} />
        <Route path="/view-post/:id" element={<ViewBusinessPost />} />
        <Route path="/edit-post/:id" element={<EditBusinessPost />} />
        <Route path="/add-business" element={<AddBusinessPost />} />
      </Routes>
    </div>
  );
}

export default App;
