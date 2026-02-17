import { useState, useEffect } from "react"
import { User } from "lucide-react"

const Profile = () => {

    const [isEditing, setIsEditing] = useState(false)

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        rollNumber: "",
        department: "",
        year: "",
        image: null
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
                year: "3rd Year",
                image: null
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

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfile({
                    ...profile,
                    image: reader.result
                })
            }
            reader.readAsDataURL(file)
        }
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

            {/* Profile Image Section */}
            <div className="flex items-center gap-6 mb-8">

                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-purple-200 flex items-center justify-center bg-gray-100">

                    {profile.image ? (
                        <img
                            src={profile.image}
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <User size={50} className="text-gray-400" />
                    )}

                </div>

                {isEditing && (
                    <label className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition">
                        Upload Photo
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>
                )}

            </div>

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
