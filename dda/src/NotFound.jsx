import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ fontSize: "60px" }}>404 😭</h1>
      <h2>Page Not Found</h2>
      <p>This page doesn't exist bro 💀</p>

      <Link to="/">Go Home 🏠</Link>
    </div>
  );
}

export default NotFound;
