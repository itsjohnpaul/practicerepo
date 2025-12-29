import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h3>JOHNPAUL P</h3>

      <p>© {new Date().getFullYear()} All rights reserved</p>

      <div className="socials">
        <a href="https://github.com/itsjohnpaul" aria-label="GitHub">GitHub</a>
        <a href="https://www.linkedin.com/in/johnpaul-p-a23853280/" aria-label="LinkedIn">LinkedIn</a>
      </div>
    </footer>
  );
}
