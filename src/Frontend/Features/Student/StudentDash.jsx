import { Outlet, NavLink, useNavigate } from "react-router-dom"

const StudentDash = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn")
        localStorage.removeItem("loggedInUser")
        navigate("/")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">

            <div className="flex gap-8">

                <div className="w-64 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 h-fit flex flex-col justify-between">

                    <nav className="flex flex-col gap-4">

                        <NavLink
                            to="dashboard"
                            className={({ isActive }) =>
                                `px-4 py-3 rounded-xl transition ${isActive
                                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                                    : "bg-purple-100 hover:bg-purple-200"
                                }`
                            }
                        >
                            Event Dashboard
                        </NavLink>

                        <NavLink
                            to="profile"
                            className={({ isActive }) =>
                                `px-4 py-3 rounded-xl transition ${isActive
                                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                                    : "bg-purple-100 hover:bg-purple-200"
                                }`
                            }
                        >
                            Profile Information
                        </NavLink>

                        <NavLink
                            to="history"
                            className={({ isActive }) =>
                                `px-4 py-3 rounded-xl transition ${isActive
                                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                                    : "bg-purple-100 hover:bg-purple-200"
                                }`
                            }
                        >
                            Event History
                        </NavLink>

                        <NavLink
                            to="saved"
                            className={({ isActive }) =>
                                `px-4 py-3 rounded-xl transition ${isActive
                                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                                    : "bg-purple-100 hover:bg-purple-200"
                                }`
                            }
                        >
                            Saved Events
                        </NavLink>

                        <NavLink
                            to="calendar"
                            className={({ isActive }) =>
                                `px-4 py-3 rounded-xl transition ${isActive
                                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                                    : "bg-purple-100 hover:bg-purple-200"
                                }`
                            }
                        >
                            Event Calendar
                        </NavLink>

                    </nav>

                    <button
                        onClick={handleLogout}
                        className="mt-8 px-4 py-3 rounded-xl bg-red-100 hover:bg-red-200 transition text-red-600 font-medium"
                    >
                        Logout
                    </button>

                </div>

                <div className="flex-1">
                    <Outlet />
                </div>

            </div>

        </div>
    )
}

export default StudentDash
