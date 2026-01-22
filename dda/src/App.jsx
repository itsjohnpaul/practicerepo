import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Blogs from "./Blogs";
import BlogDetail from "./BlogDetail";
import Profile from "./Profile";
import About from "./About";
import NotFound from "./NotFound";
import "./App.css"
import Home from "./Home";
import ProtectedRouter from "./ProtectedRouter";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
       <Route path="/home" element={<ProtectedRouter/>}/>

      <Route path="/dash" element={<Dashboard />}>
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<BlogDetail />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
      </Route>

    </Routes>
  );
}
