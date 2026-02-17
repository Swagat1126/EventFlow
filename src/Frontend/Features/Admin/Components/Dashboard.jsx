import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import banner from "../assets/Img1.jpg.jpeg";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="dashboard-bg"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="dashboard-container">
        <div className="dashboard-content">

          {/* HERO SECTION */}
          <div className="dashboard-hero">
            <div className="hero-content">
              <h1>Admin Dashboard</h1>
              <p>Manage events, registrations, and attendance efficiently.</p>
            </div>
          </div>

          {/* STATS SECTION */}
          <div className="stats-row">
            <div className="stat-card">
              <h2>248</h2>
              <p>Total Registrations</p>
            </div>

            <div className="stat-card">
              <h2>12</h2>
              <p>Active Events</p>
            </div>

            <div className="stat-card">
              <h2>5</h2>
              <p>Upcoming Events</p>
            </div>
          </div>

          {/* ACTION CARDS */}
          <div className="dashboard-grid">
            <div
              className="dashboard-card"
              onClick={() => navigate("/create-event")}
            >
              <h3>Create Event</h3>
              <p>Create and publish new events</p>
            </div>

            <div
              className="dashboard-card"
              onClick={() => navigate("/events")}
            >
              <h3>Manage Events</h3>
              <p>Edit, delete and track events</p>
            </div>

            <div
              className="dashboard-card"
              onClick={() => navigate("/attendance")}
            >
              <h3>QR Scanner</h3>
              <p>Scan attendee QR codes</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
