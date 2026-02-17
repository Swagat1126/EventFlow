import './App.css'
import { Routes, Route } from "react-router-dom"

import Login from "./Frontend/Features/Student/components/Login"
import Register from "./Frontend/Features/Student/components/Register"

import EventListing from "./Frontend/Features/Student/Pages/EventListing"
import EventDetails from "./Frontend/Features/Student/Pages/EventDetails"
import MyEvents from "./Frontend/Features/Student/Pages/MyEvents"
import Profile from "./Frontend/Features/Student/Pages/Profile"
import SavedEvents from "./Frontend/Features/Student/Pages/SavedEvents"

import StudentDash from "./Frontend/Features/Student/StudentDash"


function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/student" element={<StudentDash />}>

        <Route path="dashboard" element={<EventListing />} />
        <Route path="event/:id" element={<EventDetails />} />
        <Route path="history" element={<MyEvents />} />
        <Route path="profile" element={<Profile />} />
        <Route path="saved" element={<SavedEvents />} />
        <Route path="calendar" element={<div>Event Calendar</div>} />

      </Route>

    </Routes>
  )
}

export default App
