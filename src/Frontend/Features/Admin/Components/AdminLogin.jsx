import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";
import loginBg from "../assets/event-banner.avif";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      credentials.email === "admin@gmail.com" &&
      credentials.password === "admin123"
    ) {
      sessionStorage.setItem("isAdminLoggedIn", "true");
      navigate("/admin", { replace: true });
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-bg" style={{ backgroundImage: `url(${loginBg})` }}>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
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
