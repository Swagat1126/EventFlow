import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EventDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [event, setEvent] = useState(null);
    const [isRegistered, setIsRegistered] = useState(false);
    const [loading, setLoading] = useState(true);
    const [qrCode, setQrCode] = useState(null);

    useEffect(() => {

        const fetchEvent = async () => {
            try {
                const response = await fetch(`/api/events/${id}`);
                const data = await response.json();
                setEvent(data);
            } catch (error) {
                console.error("Failed to fetch event", error);
            }
        };

        const checkRegistration = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await fetch(`/api/registrations/check/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.registered) {
                        setIsRegistered(true);
                        setQrCode(data.qr_code);
                    }
                }
            } catch (error) {
                console.error("Failed to check registration", error);
            }
        };

        fetchEvent();
        checkRegistration();
        setLoading(false);

    }, [id]);

    const handleRegister = async () => {

        try {
            const token = localStorage.getItem("token");

            const response = await fetch("/api/registrations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ eventId: id })
            });

            if (response.ok) {
                const data = await response.json();
                setIsRegistered(true);
                setQrCode(data.qr_code);
            }

        } catch (error) {
            console.error("Registration failed", error);
        }
    };

    if (loading) {
        return <div className="p-6">Loading...</div>;
    }

    if (!event) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <h2 className="text-2xl font-bold text-purple-600 mb-2">
                    Event Not Found
                </h2>
                <button
                    onClick={() => navigate("/student/dashboard")}
                    className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-500"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">

            <button
                onClick={() => navigate(-1)}
                className="mb-6 px-4 py-2 rounded-lg bg-purple-200 hover:bg-purple-300"
            >
                ← Back
            </button>

            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden">

                <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-full h-72 object-cover"
                />

                <div className="p-8">

                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
                        {event.title}
                    </h1>

                    <div className="flex flex-wrap gap-6 text-gray-700 mb-6">
                        <p>📅 {new Date(event.event_date).toDateString()}</p>
                        <p>📍 {event.venue}</p>
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

                    {qrCode && (
                        <div className="mt-6 text-center">
                            <h3 className="mb-2 font-semibold text-purple-600">
                                Your QR Code
                            </h3>
                            <img
                                src={qrCode}
                                alt="QR Code"
                                className="w-40 mx-auto"
                            />
                        </div>
                    )}

                </div>

            </div>

        </div>
    );
};

export default EventDetails;