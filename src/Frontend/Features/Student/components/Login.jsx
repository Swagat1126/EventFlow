import React, { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Img1 from "../../../../assets/Img1.jpg"



const Login = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const validate = () => {
        let newErrors = {}

        if (!formData.email)
            newErrors.email = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Invalid email format"

        if (!formData.password)
            newErrors.password = "Password is required"

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = validate()

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            setSuccess("")
        } else {
            setErrors({})
            setSuccess("Login successful!")
            setTimeout(() => navigate("/student/dashboard"), 1200)
        }
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Img1})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700/80 to-pink-600/70"></div>

            <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-4xl flex rounded-2xl overflow-hidden shadow-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hidden md:flex w-1/2 p-8 text-white flex-col justify-between ml-6"
                    >
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                Welcome Back!
                            </h2>
                            <p className="text-sm opacity-90">
                                Login to explore upcoming college events and manage your registrations.
                            </p>
                        </div>

                        <p className="text-sm">
                            Don’t have an account?{" "}
                            <button
                                type="button"
                                onClick={() => navigate("/register")}
                                className="text-pink-300 underline hover:text-pink-400 transition"
                            >
                                Register Here
                            </button>
                        </p>
                    </motion.div>

                    <div className="w-full md:w-1/2 p-6 bg-white/20 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Login
                        </h3>

                        {success && (
                            <div className="mb-3 p-2 rounded bg-green-500/80 text-white text-sm">
                                {success}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-3">

                            <div>
                                <label className="text-sm text-white">Email*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2.5 rounded-xl bg-white/30 border border-white/40 text-white focus:ring-2 focus:ring-pink-400 focus:shadow-lg focus:shadow-pink-500/30 outline-none transition"
                                />
                                {errors.email && (
                                    <p className="text-red-300 text-xs mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="text-sm text-white">Password*</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2.5 rounded-xl bg-white/30 border border-white/40 text-white focus:ring-2 focus:ring-pink-400 focus:shadow-lg focus:shadow-pink-500/30 outline-none transition"
                                    />
                                    <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-3 cursor-pointer text-white"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </span>
                                </div>
                                {errors.password && (
                                    <p className="text-red-300 text-xs mt-1">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2.5 rounded-xl font-semibold transition"
                            >
                                Login
                            </motion.button>

                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Login
