import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="top-navbar">
      <h2 className="logo">EventFlow</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/create-event">Create Event</Link>
        <Link to="/events">Manage Events</Link>
        <Link to="/attendance">QR Scanner</Link>
        <Link to="/report">Attendance Report</Link>
      </div>
    </div>
  );
};

export default Navbar;
