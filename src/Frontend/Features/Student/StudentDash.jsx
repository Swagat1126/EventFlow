import { useState } from "react"
import { Outlet, NavLink, useNavigate } from "react-router-dom"
import { Menu, X } from "lucide-react"

const StudentDash = () => {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn")
        localStorage.removeItem("loggedInUser")
        navigate("/")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex">

            <div
                className={`fixed md:static top-0 left-0 h-full w-64 bg-white/90 backdrop-blur-md shadow-lg p-6 flex flex-col justify-between z-50 transform transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
            >


                <div>

                    <div className="flex justify-between items-center mb-6 md:hidden">
                        <h2 className="font-bold text-lg text-purple-600">
                            Student Panel
                        </h2>
                        <button onClick={() => setIsOpen(false)}>
                            <X size={22} />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-4">

                        <NavLink
                            to="dashboard"
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
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

                </div>


                <button
                    onClick={handleLogout}
                    className="mt-8 px-4 py-3 rounded-xl bg-red-100 hover:bg-red-200 transition text-red-600 font-medium"
                >
                    Logout
                </button>

            </div>


            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 md:hidden z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}


            <div className="flex-1 p-6">

                <button
                    className="mb-6 md:hidden"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={26} />
                </button>

                <Outlet />

            </div>

        </div>
    )
}

export default StudentDash
