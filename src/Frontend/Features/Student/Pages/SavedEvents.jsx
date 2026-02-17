import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const SavedEvents = () => {

    const [savedEvents, setSavedEvents] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("savedEvents")) || []
        setSavedEvents(saved)
    }, [])

    const handleRemove = (e, id) => {
        e.stopPropagation()

        const updated = savedEvents.filter(
            event => String(event.id) !== String(id)
        )

        localStorage.setItem("savedEvents", JSON.stringify(updated))
        setSavedEvents(updated)
    }

    return (
        <div>

            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Saved Events
            </h1>

            {savedEvents.length > 0 ? (

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {savedEvents.map(event => (

                        <div
                            key={event.id}
                            onClick={() => navigate(`/student/event/${event.id}`)}
                            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer overflow-hidden relative"
                        >

                            {/* Remove Button */}
                            <button
                                onClick={(e) => handleRemove(e, event.id)}
                                className="absolute top-3 right-3 text-lg bg-white rounded-full px-2 py-1 shadow hover:scale-110 transition"
                            >
                                ❌
                            </button>

                            <div className="h-44 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-purple-700 mb-2">
                                    {event.title}
                                </h3>

                                <p className="text-sm text-gray-600">
                                    📅 {new Date(event.date).toDateString()}
                                </p>

                                <p className="text-sm text-gray-600">
                                    📍 {event.location}
                                </p>
                            </div>

                        </div>

                    ))}

                </div>

            ) : (

                <div className="flex flex-col items-center justify-center mt-20">

                    <div className="text-6xl mb-4">🤍</div>

                    <p className="text-purple-600 font-medium text-lg">
                        No saved events yet.
                    </p>

                    <button
                        onClick={() => navigate("/student/dashboard")}
                        className="mt-6 px-6 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition"
                    >
                        Browse Events
                    </button>

                </div>

            )}

        </div>
    )
}

export default SavedEvents
