import "./App.css";
import { Routes, Route } from "react-router-dom";
import ChatBot from "./shared/ChatBot/ChatBot";

import { Landingpage } from "./Frontend/Features/Landing";
import { Login, Registration, StudentDash, EventListing, EventDetails, MyEvents, Profile } from "./Frontend/Features/Student";
import { AdminLogin, Dashboard, CreateEvent, ManageEvents, QRScanner, AttendanceReport } from "./Frontend/Features/Admin";

function App() {
  return (
    <>
      <Routes>

        {/* ================= LANDING ================= */}
        <Route path="/" element={<Landingpage />} />

        <Route path="/student/login" element={<Login />} />
        <Route path="/student/register" element={<Registration />} />

        {/* ================= STUDENT ================= */}

        <Route path="/student" element={<StudentDash />}>
          <Route index element={<EventListing />} />
          <Route path="dashboard" element={<EventListing />} />
          <Route path="event/:id" element={<EventDetails />} />
          <Route path="history" element={<MyEvents />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* ================= ADMIN ================= */}

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/create-event" element={<CreateEvent />} />
        <Route path="/admin/events" element={<ManageEvents />} />
        <Route path="/admin/attendance" element={<QRScanner />} />
        <Route path="/admin/report" element={<AttendanceReport />} />

      </Routes>

      {/* Global Chatbot */}
      <ChatBot />
    </>
  );
}

export default App;