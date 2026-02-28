import { useNavigate } from "react-router-dom"

const EventCard = ({ event }) => {

    const navigate = useNavigate()

    return (
        <div
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer overflow-hidden"
            onClick={() => navigate(`/student/event/${event.id}`)}
        >

            <div className="h-44 overflow-hidden">
                <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
            </div>

            <div className="p-5">

                <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                    {event.title}
                </h3>

                <p className="text-sm text-gray-600 mb-1">
                    📅 {new Date(event.event_date).toDateString()}
                </p>

                <p className="text-sm text-gray-600">
                    📍 {event.venue}
                </p>

            </div>

        </div>
    )
}

export default EventCard