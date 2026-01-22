import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="title">
        <h2>MY Blogs</h2>
      </div>

      <div className="na">
         <Link className="dashLink" to="/home">
          Home
        </Link>
        <Link className="dashLink" to="/dash">
          Dashboard
        </Link>
         <Link className="dashLink" to="/" >
          Logout
        </Link>

      </div>
    </div>
  );
}

export default Nav;
