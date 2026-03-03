import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";
import loginBg from "../../../../assets/event-banner.avif";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      credentials.username === "admin" &&
      credentials.password === "admin123"
    ) {
      // ✅ Set login flag
      sessionStorage.setItem("isAdminLoggedIn", "true");

      // ✅ Navigate to Admin Dashboard
      navigate("/admin", { replace: true });
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

        <p className="text-sm">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/student/register")}
            className="text-blue-300 underline cursor-pointer transition mt-3"
          >
            Register Here
          </button>
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;