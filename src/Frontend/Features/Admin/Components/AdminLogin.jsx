import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";
import loginBg from "../assets/event-banner.avif";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      credentials.username === "admin" &&
      credentials.password === "admin123"
    ) {
      // ✅ SET LOGIN FLAG FIRST
      sessionStorage.setItem("isAdminLoggedIn", "true");
      // ✅ THEN NAVIGATE
      navigate("/", { replace: true });
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-bg" style={{ backgroundImage: `url(${loginBg})` }}>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
