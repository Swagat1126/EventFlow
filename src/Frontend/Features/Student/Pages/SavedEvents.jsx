import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const SavedEvents = () => {

    const [savedEvents, setSavedEvents] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("savedEvents")) || []
        setSavedEvents(saved)
    }, [])

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
                            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer overflow-hidden"
                        >

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
                            </div>

                        </div>

                    ))}

                </div>

            ) : (

                <div className="text-center mt-20 text-purple-600 font-medium">
                    No saved events yet.
                </div>

            )}

        </div>
    )
}

export default SavedEvents
