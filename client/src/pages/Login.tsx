import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../utils/auth";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Auth.login("fakeToken"); // Simulated login
    navigate("/");  // ✅ Use React Router navigation instead of reloading the page
  };  

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account?</p>
      <button onClick={() => navigate("/register")}>Register New User</button>
    </div>
  );
};

export default Login;
