import "./App.css";
import { Routes, Route } from "react-router-dom";


import { Landingpage } from "./Frontend/Features/Landing";


import { Login, Registration, StudentDash, EventListing, EventDetails, MyEvents, Profile } from "./Frontend/Features/Student";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Landingpage />} />

      <Route path="/student/login" element={<Login />} />
      <Route path="/student/register" element={<Registration />} />


      <Route path="/student" element={<StudentDash />}>
        <Route index element={<EventListing />} />
        <Route path="dashboard" element={<EventListing />} />
        <Route path="event/:id" element={<EventDetails />} />
        <Route path="history" element={<MyEvents />} />
        <Route path="profile" element={<Profile />} />
      </Route>

    </Routes>
  );
}

export default App;