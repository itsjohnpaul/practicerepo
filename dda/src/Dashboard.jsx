import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./DashBoard.css";
import Nav from "./Nav";
function Dashboard() {
  return (
   <>
          <Nav/>

    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <Link to="profile">Profile</Link>
        <Link to="blogs">Blogs</Link>
        <Link to="about">About</Link>
      </div>

      {/* Main content */}
      <div className="main-content">
        <Outlet />
      </div>
    </div></>
  );
}

export default Dashboard;
