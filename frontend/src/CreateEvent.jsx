import React, { useState } from "react";
import "./CreateEvent.css";
import { Link } from "react-router-dom";

function CreateEvent() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [num,setTicket]=useState(0);
  const [price, setPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");

  const handleCreateEvent = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await fetch("http://localhost:5000/event", {
        method: "POST",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, details, date, location,num, price }),
      });

      if (response.ok) {
        alert("Event created successfully!");
        
      } else {
        alert("Failed to create event.");
        console.error("Failed to create event.");
      }
    } catch (error) {
      alert("Error creating event.");
      console.error("Error creating event:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create-event">
      {/* Navbar */}
      <nav className="navbar">
      <div className='logo'><a href="/">EventNation</a></div>
      <ul className='links'>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href='/create'>Create Events</a></li>
        <li><a href="/contact">contact</a></li>
        
      </ul>
      </nav>

      {/* Create Event Form */}
      <div className={`create-event-form ${isLoading ? "loading" : ""}`}>
        <h2>CREATE EVENT</h2>
        <form onSubmit={handleCreateEvent}>
          <input
            type="text"
            placeholder="Event Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          ></textarea>
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
           <input
            type="number"
            placeholder="Number of tickets"
            value={num}
            onChange={(e) => setTicket(e.target.value)}
            required
          />
          {isLoading ? (
            <div className="spinner"></div>
          ) : (
            <button type="submit">Create Event</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
