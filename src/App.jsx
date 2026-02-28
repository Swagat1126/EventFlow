import './App.css'
import { Routes, Route } from "react-router-dom"

import { Login, Register, StudentDash, EventListing, EventDetails, MyEvents, Profile, Registration } from "./Frontend/Features/Student"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />

      <Route path="/student" element={<StudentDash />}>

        <Route path="dashboard" element={<EventListing />} />
        <Route path="event/:id" element={<EventDetails />} />
        <Route path="history" element={<MyEvents />} />
        <Route path="profile" element={<Profile />} />

      </Route>

    </Routes>
  )
}

export default App