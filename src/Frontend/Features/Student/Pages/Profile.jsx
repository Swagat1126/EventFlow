import { useState, useEffect } from "react"

const Profile = () => {

    const [isEditing, setIsEditing] = useState(false)

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        rollNumber: "",
        department: "",
        year: ""
    })

    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem("studentProfile"))

        if (storedProfile) {
            setProfile(storedProfile)
        } else {
            const defaultProfile = {
                name: "Swagat",
                email: "swagat@gmail.com",
                rollNumber: "CS101",
                department: "Computer Science",
                year: "3rd Year"
            }
            localStorage.setItem("studentProfile", JSON.stringify(defaultProfile))
            setProfile(defaultProfile)
        }
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setProfile({
            ...profile,
            [name]: value
        })
    }

    const handleSave = () => {
        localStorage.setItem("studentProfile", JSON.stringify(profile))
        setIsEditing(false)
    }

    return (
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8">

            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Profile Information
            </h1>

            <div className="grid md:grid-cols-2 gap-6">

                <div>
                    <label className="text-sm text-gray-600">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-1 p-3 rounded-xl bg-purple-50 border border-purple-200 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-600">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-1 p-3 rounded-xl bg-purple-50 border border-purple-200 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-600">Roll Number</label>
                    <input
                        type="text"
                        name="rollNumber"
                        value={profile.rollNumber}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-1 p-3 rounded-xl bg-purple-50 border border-purple-200 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-600">Department</label>
                    <input
                        type="text"
                        name="department"
                        value={profile.department}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-1 p-3 rounded-xl bg-purple-50 border border-purple-200 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-600">Year</label>
                    <input
                        type="text"
                        name="year"
                        value={profile.year}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full mt-1 p-3 rounded-xl bg-purple-50 border border-purple-200 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                </div>

            </div>

            <div className="mt-8 flex gap-4">

                {!isEditing ? (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition"
                    >
                        Edit Profile
                    </button>
                ) : (
                    <>
                        <button
                            onClick={handleSave}
                            className="px-6 py-2 rounded-lg text-white bg-green-500 hover:bg-green-600 transition"
                        >
                            Save Changes
                        </button>

                        <button
                            onClick={() => setIsEditing(false)}
                            className="px-6 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition"
                        >
                            Cancel
                        </button>
                    </>
                )}

            </div>

        </div>
    )
}

export default Profile
