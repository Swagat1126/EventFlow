import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Use sessionStorage OR localStorage (match your login)
    sessionStorage.removeItem("isAdminLoggedIn");
    // localStorage.removeItem("isAdminLoggedIn");

    navigate("/admin-login", { replace: true });
  };

  return (
    <div className="top-navbar">
      <h2 className="logo">EventFlow</h2>

      <div className="nav-links">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/create-event">Create Event</Link>
        <Link to="/admin/events">Manage Events</Link>
        <Link to="/admin/attendance">QR Scanner</Link>
        <Link to="/admin/report">Attendance Report</Link>
        {/* LOGOUT */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
