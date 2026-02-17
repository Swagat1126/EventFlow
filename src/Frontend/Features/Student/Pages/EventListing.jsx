import { useState } from "react";
import EventCard from "../components/EventCard"



const dummyEvents = [
    {
        id: 1,
        title: "Tech Fest 2024",
        date: "2024-03-20",
        location: "Main Auditorium",
        category: "Tech",
        image: "https://source.unsplash.com/400x300/?technology,event"
    },
    {
        id: 2,
        title: "Music Night",
        date: "2024-03-25",
        location: "Open Ground",
        category: "Music",
        image: "https://source.unsplash.com/400x300/?concert"
    },
    {
        id: 3,
        title: "Sports Meet",
        date: "2024-04-05",
        location: "College Ground",
        category: "Sports",
        image: "https://source.unsplash.com/400x300/?sports"
    },
    {
        id: 4,
        title: "Startup Seminar",
        date: "2024-04-10",
        location: "Seminar Hall",
        category: "Tech",
        image: "https://source.unsplash.com/400x300/?startup"
    },
    {
        id: 5,
        title: "Photography Workshop",
        date: "2024-04-15",
        location: "Media Room",
        category: "Art",
        image: "https://source.unsplash.com/400x300/?photography"
    },
    {
        id: 6,
        title: "Dance Competition",
        date: "2024-04-18",
        location: "Open Stage",
        category: "Music",
        image: "https://source.unsplash.com/400x300/?dance"
    },
    {
        id: 7,
        title: "AI Workshop",
        date: "2024-04-22",
        location: "Lab Block B",
        category: "Tech",
        image: "https://source.unsplash.com/400x300/?artificial-intelligence"
    },
    {
        id: 8,
        title: "Drama Night",
        date: "2024-04-25",
        location: "Main Stage",
        category: "Art",
        image: "https://source.unsplash.com/400x300/?theatre"
    }
];

const EventListing = () => {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sortBy, setSortBy] = useState("Newest");
    const [currentPage, setCurrentPage] = useState(1);

    const eventsPerPage = 6;

    let filteredEvents = dummyEvents
        .filter((event) =>
            event.title.toLowerCase().includes(search.toLowerCase())
        )
        .filter((event) =>
            category === "All" ? true : event.category === category
        );

    if (sortBy === "Newest") {
        filteredEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    if (sortBy === "Oldest") {
        filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

    const currentEvents = filteredEvents.slice(
        indexOfFirstEvent,
        indexOfLastEvent
    );

    const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setCurrentPage(1);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">

            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">

                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Upcoming Events
                </h1>

                <div className="flex flex-wrap gap-3 bg-white/70 backdrop-blur-md p-3 rounded-xl shadow">

                    <input
                        type="text"
                        placeholder="Search events..."
                        value={search}
                        onChange={handleSearchChange}
                        className="border border-purple-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <select
                        value={category}
                        onChange={handleCategoryChange}
                        className="border border-purple-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="All">All Categories</option>
                        <option value="Tech">Tech</option>
                        <option value="Music">Music</option>
                        <option value="Sports">Sports</option>
                        <option value="Art">Art</option>
                    </select>

                    <select
                        value={sortBy}
                        onChange={handleSortChange}
                        className="border border-purple-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="Newest">Date: Newest First</option>
                        <option value="Oldest">Date: Oldest First</option>
                    </select>

                </div>
            </div>

            {currentEvents.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            ) : (
                <div className="text-center mt-12 text-purple-500 font-medium">
                    No events found.
                </div>
            )}

            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-3 mt-10">

                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="px-4 py-2 rounded-lg bg-purple-200 disabled:opacity-50"
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-4 py-2 rounded-lg ${currentPage === index + 1
                                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                                : "bg-purple-200"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="px-4 py-2 rounded-lg bg-purple-200 disabled:opacity-50"
                    >
                        Next
                    </button>

                </div>
            )}

        </div>
    );
};

export default EventListing;
