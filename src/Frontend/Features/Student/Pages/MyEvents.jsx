import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyEvents = () => {
    const [registeredEvents, setRegisteredEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedEvents =
            JSON.parse(localStorage.getItem("registeredEvents")) || [];
        setRegisteredEvents(storedEvents);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">

            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                My Registered Events
            </h1>

            {registeredEvents.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {registeredEvents.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 overflow-hidden cursor-pointer"
                            onClick={() => navigate(`/event/${event.id}`)}
                        >
                            <div className="h-44 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                                    {event.title}
                                </h3>

                                <p className="text-sm text-gray-600 mb-1">
                                    📅 {new Date(event.date).toDateString()}
                                </p>

                                <p className="text-sm text-gray-600">
                                    📍 {event.location}
                                </p>

                                <div className="mt-4">
                                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700">
                                        Registered
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center mt-16">

                    <img
                        src="https://source.unsplash.com/400x300/?empty,calendar"
                        alt="No Events"
                        className="w-72 mb-6 opacity-80"
                    />

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
