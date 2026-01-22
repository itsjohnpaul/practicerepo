import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
function Login() {
  const nav = useNavigate();
  const [input, setInput] = useState({
    name: "",
    password: "",
  });
  const handlesub = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    nav("/home");
  };
  return (
    <div className="log">
      <div className="log">
        <div className="ti">
          <h2>Login to Access</h2>
        </div>
      </div>

      <div className="for">
        <form onSubmit={handlesub}>
          <label>Enter the UserName:</label>
          <input
            type="text"
            placeholder="Enter the username"
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />

          <label>Enter the Password:</label>
          <input
            type="password"
            placeholder="Enter the password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
              <center><p>Use Username="admin" && password="1234"</p></center>

    </div>
  );
}

export default Login;
