import { useState } from "react";
import "../styles/CreateEvent.css";
import defaultImage from "../assets/event-banner.avif"; // default background

const CreateEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    venue: "",
    description: "",
    maxParticipants: "",
    category: "Technical",
    registrations: [],
    image: defaultImage, // default image
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEvent({ ...event, image: reader.result }); // Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    existingEvents.push(event);
    localStorage.setItem("events", JSON.stringify(existingEvents));

    alert("Event Created Successfully!");

    setEvent({
      title: "",
      date: "",
      venue: "",
      description: "",
      maxParticipants: "",
      category: "Technical",
      registrations: [],
      image: defaultImage,
    });
  };

  return (
    <div
      className="create-bg"
      style={{ backgroundImage: `url(${defaultImage})` }}
    >
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Create Event</h2>

        <input
          type="text"
          name="title"
          placeholder="Event Name"
          value={event.title}
          onChange={handleChange}
          required
        />

        <input
          type="datetime-local"
          name="date"
          value={event.date}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={event.venue}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={event.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="maxParticipants"
          placeholder="Max Participants"
          value={event.maxParticipants}
          onChange={handleChange}
        />

        <select
          name="category"
          value={event.category}
          onChange={handleChange}
        >
          <option>Technical</option>
          <option>Cultural</option>
          <option>Sports</option>
        </select>

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <button type="submit" className="publish-btn">
          Publish Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
