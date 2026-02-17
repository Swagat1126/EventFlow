import { useEffect, useState } from "react";
import "../styles/ManageEvents.css";

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(savedEvents);
  }, []);

  const deleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const downloadCSV = (event) => {
    if (!event.registrations || event.registrations.length === 0) {
      alert("No registrations found!");
      return;
    }

    const headers = Object.keys(event.registrations[0]).join(",");
    const rows = event.registrations
      .map((reg) => Object.values(reg).join(","))
      .join("\n");

    const csv = `${headers}\n${rows}`;
    const blob = new Blob([csv], { type: "text/csv" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${event.title}_registrations.csv`;
    link.click();
  };

  // Filter events by search term
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="events-page">
      {/* SEARCH BAR */}
      <div className="events-header">
        <h1>Manage Events</h1>
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* NO EVENTS */}
      {filteredEvents.length === 0 ? (
        <p className="no-events">No events found.</p>
      ) : (
        <div className="events-grid">
          {filteredEvents.map((event, index) => (
            <div className="event-card" key={index}>
              <div className="event-image">
                <img
                  src={
                    event.image ||
                    "https://via.placeholder.com/400x200?text=Event+Image"
                  }
                  alt={event.title}
                />
              </div>

              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p><strong>Category:</strong> {event.category}</p>
                <p><strong>Venue:</strong> {event.venue}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Registrations:</strong> {event.registrations?.length || 0}</p>

                <div className="btn-group">
                  <button
                    className="btn download"
                    onClick={() => downloadCSV(event)}
                  >
                    Download CSV
                  </button>
                  <button
                    className="btn delete"
                    onClick={() => deleteEvent(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageEvents;
