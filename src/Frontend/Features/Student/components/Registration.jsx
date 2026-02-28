import React, { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Img1 from "../../../../assets/Img1.jpg"

const Registration = () => {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        rollNumber: "",
        department: "",
        role: "student",
        password: "",
        terms: false,
    })

    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState("")

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        })
    }

    const validate = () => {
        let newErrors = {}

        if (!formData.fullName.trim())
            newErrors.fullName = "Full name is required"

        if (!formData.email)
            newErrors.email = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Invalid email format"

        if (!formData.password)
            newErrors.password = "Password is required"
        else if (formData.password.length < 6)
            newErrors.password = "Minimum 6 characters required"

        if (!formData.role)
            newErrors.role = "Please select role"

        if (!formData.terms)
            newErrors.terms = "You must agree to terms"

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = validate()

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        const users = JSON.parse(localStorage.getItem("users")) || []

        const exists = users.find(user => user.email === formData.email)

        if (exists) {
            setErrors({ email: "User already exists" })
            return
        }

        users.push(formData)
        localStorage.setItem("users", JSON.stringify(users))

        setSuccess("Registration successful!")

        setTimeout(() => {
            navigate("/")
        }, 1200)
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

                    <div className="hidden md:flex w-1/2 p-8 text-white flex-col justify-between ml-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                Register Account
                            </h2>
                            <p className="text-sm opacity-90">
                                Create your account to access events platform.
                            </p>
                        </div>

                        <p className="text-sm">
                            Already have an account?{" "}
                            <button
                                type="button"
                                onClick={() => navigate("/")}
                                className="text-pink-300 underline hover:text-pink-400 transition"
                            >
                                Login here
                            </button>
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 p-6 bg-white/20 backdrop-blur-sm">

                        <h3 className="text-xl font-semibold text-white mb-4">
                            Create Account
                        </h3>

                        {success && (
                            <div className="mb-3 p-2 rounded bg-green-500/80 text-white text-sm">
                                {success}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-3">

                            <Input label="Full Name*" name="fullName" value={formData.fullName} onChange={handleChange} error={errors.fullName} />
                            <Input label="Email*" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />

                            <div>
                                <label className="text-sm text-white">Role*</label>
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2.5 rounded-xl bg-white/30 border border-white/40 text-white outline-none"
                                >
                                    <option value="student" className="text-black">Student</option>
                                    <option value="admin" className="text-black">Admin</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm text-white">Password*</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-2.5 rounded-xl bg-white/30 border border-white/40 text-white outline-none"
                                    />
                                    <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-3 cursor-pointer text-white"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </span>
                                </div>
                                {errors.password && <p className="text-red-300 text-xs mt-1">{errors.password}</p>}
                            </div>

                            <div className="flex items-center gap-2 text-white text-sm">
                                <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
                                <label>I agree to terms & conditions</label>
                            </div>
                            {errors.terms && <p className="text-red-300 text-xs">{errors.terms}</p>}

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2.5 rounded-xl font-semibold transition"
                            >
                                Register Account
                            </motion.button>

                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

const Input = ({ label, name, type = "text", value, onChange, error }) => (
    <div>
        <label className="text-sm text-white">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full mt-1 p-2.5 rounded-xl bg-white/30 border border-white/40 text-white outline-none"
        />
        {error && <p className="text-red-300 text-xs mt-1">{error}</p>}
    </div>
)

export default Registration