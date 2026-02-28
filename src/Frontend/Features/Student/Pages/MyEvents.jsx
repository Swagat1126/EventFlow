import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyEvents = () => {
    const [registrations, setRegistrations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMyEvents = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await fetch("/api/registrations/my", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                const data = await response.json();
                setRegistrations(data);
            } catch (error) {
                console.error("Failed to fetch registrations", error);
            }
        };

        fetchMyEvents();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">

            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                My Registered Events
            </h1>

            {registrations.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {registrations.map((registration) => (
                        <div
                            key={registration.id}
                            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 overflow-hidden cursor-pointer"
                            onClick={() => navigate(`/student/event/${registration.event.id}`)}
                        >

                            <div className="h-44 overflow-hidden">
                                <img
                                    src={registration.event.image_url}
                                    alt={registration.event.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-5">

                                <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                                    {registration.event.title}
                                </h3>

                                <p className="text-sm text-gray-600 mb-1">
                                    📅 {new Date(registration.event.event_date).toDateString()}
                                </p>

                                <p className="text-sm text-gray-600 mb-3">
                                    📍 {registration.event.venue}
                                </p>

                                <div className="flex items-center justify-between">

                                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700">
                                        Registered
                                    </span>

                                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${registration.is_present
                                            ? "bg-blue-100 text-blue-700"
                                            : "bg-yellow-100 text-yellow-700"
                                        }`}>
                                        {registration.is_present ? "Present" : "Not Marked"}
                                    </span>

                                </div>

                                {registration.qr_code && (
                                    <div className="mt-4 text-center">
                                        <img
                                            src={registration.qr_code}
                                            alt="QR Code"
                                            className="w-24 mx-auto"
                                        />
                                    </div>
                                )}

                            </div>
                        </div>
                    ))}

                </div>
            ) : (
                <div className="flex flex-col items-center justify-center mt-16">

                    <p className="text-purple-600 font-medium text-lg">
                        You have not registered for any events yet.
                    </p>

                    <button
                        onClick={() => navigate("/student/dashboard")}
                        className="mt-6 px-6 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition"
                    >
                        Explore Events
                    </button>

                </div>
            )}

        </div>
    );
};

export default MyEvents;