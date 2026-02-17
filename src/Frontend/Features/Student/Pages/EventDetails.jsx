import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const dummyEvents = [
    {
        id: 1,
        title: "Tech Fest 2024",
        date: "2024-03-20",
        location: "Main Auditorium",
        category: "Tech",
        description:
            "Join us for an exciting tech fest filled with innovation, coding competitions, and guest speakers from top companies.",
        image: "https://source.unsplash.com/800x500/?technology,event"
    },
    {
        id: 2,
        title: "Music Night",
        date: "2024-03-25",
        location: "Open Ground",
        category: "Music",
        description:
            "An energetic night of live performances, bands, and DJ sessions. Don't miss the vibe!",
        image: "https://source.unsplash.com/800x500/?concert"
    },
    {
        id: 3,
        title: "Sports Meet",
        date: "2024-04-05",
        location: "College Ground",
        category: "Sports",
        description:
            "Participate in various sports events and show your competitive spirit.",
        image: "https://source.unsplash.com/800x500/?sports"
    }
];

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isRegistered, setIsRegistered] = useState(false);

    const event = dummyEvents.find(
        (item) => item.id === parseInt(id)
    );

    const handleRegister = () => {
        setIsRegistered(true);
    };

    if (!event) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">

                <img
                    src="https://source.unsplash.com/400x300/?empty,search"
                    alt="Not Found"
                    className="w-72 mb-6 opacity-80"
                />

                <h2 className="text-2xl font-bold text-purple-600 mb-2">
                    Event Not Found
                </h2>

                <p className="text-gray-600 mb-6">
                    The event you are looking for does not exist or may have been removed.
                </p>

                <button
                    onClick={() => navigate("/student/dashboard")}
                    className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition"
                >
                    Go Back to Dashboard
                </button>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">

            <button
                onClick={() => navigate(-1)}
                className="mb-6 px-4 py-2 rounded-lg bg-purple-200 hover:bg-purple-300 transition"
            >
                ← Back
            </button>

            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden">

                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-72 object-cover"
                />

                <div className="p-8">

                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
                        {event.title}
                    </h1>

                    <div className="flex flex-wrap gap-6 text-gray-700 mb-6">
                        <p>📅 {new Date(event.date).toDateString()}</p>
                        <p>📍 {event.location}</p>
                        <p>🏷 {event.category}</p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        {event.description}
                    </p>

                    {isRegistered && (
                        <div className="mb-4 text-green-600 font-medium">
                            ✅ Successfully Registered!
                        </div>
                    )}

                    <button
                        onClick={handleRegister}
                        disabled={isRegistered}
                        className={`px-8 py-3 rounded-lg text-white font-semibold transition ${isRegistered
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
                            }`}
                    >
                        {isRegistered ? "Already Registered" : "Register Event"}
                    </button>

                </div>

            </div>

        </div>
    );
};

export default EventDetails;
