import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const EventCard = ({ event }) => {

    const navigate = useNavigate()

    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("savedEvents")) || []
        const exists = saved.find(item => item.id === event.id)
        if (exists) setIsSaved(true)
    }, [event.id])

    const handleSave = (e) => {
        e.stopPropagation()

        let saved = JSON.parse(localStorage.getItem("savedEvents")) || []

        if (isSaved) {
            saved = saved.filter(item => item.id !== event.id)
            localStorage.setItem("savedEvents", JSON.stringify(saved))
            setIsSaved(false)
        } else {
            saved.push(event)
            localStorage.setItem("savedEvents", JSON.stringify(saved))
            setIsSaved(true)
        }
    }

    return (
        <div
            onClick={() => navigate(`/student/event/${event.id}`)}
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer overflow-hidden relative"
        >

            <button
                onClick={handleSave}
                className="absolute top-3 right-3 text-xl"
            >
                {isSaved ? "❤️" : "🤍"}
            </button>

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

            </div>
        </div>
    )
}

export default EventCard
