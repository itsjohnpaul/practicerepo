import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./Home";

function ProtectedRouter() {
    const userinfo = JSON.parse(localStorage.getItem("user"));

    if (!userinfo || userinfo.name !== "admin" || userinfo.password !== "1234") {
        alert("Invalid credentials!");
        return <Navigate to="/" />;
    }

    return <Home />;
}

export default ProtectedRouter;
