import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";
import loginBg from "../../../../assets/event-banner.avif";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
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

    // Get registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching admin
    const adminUser = users.find(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password &&
        user.role === "admin"
    );

    if (adminUser) {
      // Set admin login session
      sessionStorage.setItem("isAdminLoggedIn", "true");
      sessionStorage.setItem("adminEmail", adminUser.email);

      // Redirect to dashboard
      navigate("/admin", { replace: true });
    } else {
      alert("Invalid admin credentials");
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
