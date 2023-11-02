import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import UserProfileModel from "./UserProfileModel";

function Dashboard() {
  const [userData, setUserData] = useState({});
  const [userEvents, setUserEvents] = useState([]);
  const [scheduledEvents, setScheduledEvents] = useState([]);
  const [showUserProfileModal, setShowUserProfileModal] = useState(false);
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");

  const [editingEvent, setEditingEvent] = useState(null);

  const [editedFields, setEditedFields] = useState({});

  const openUserProfileModal = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
    setShowUserProfileModal(true);
  };

  const closeUserProfileModal = () => {
    setShowUserProfileModal(false);
  };


  useEffect(() => {
    if (token) {
      fetchUserData(token);

      fetchUserEvents(token);

      fetchScheduledEvents(token);
    }
  }, [token]);

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const fetchUserEvents = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/event/created", {
        method:"POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserEvents(data);
      } else {
        console.error("Failed to fetch user events.");
      }
    } catch (error) {
      console.error("Error during fetchUserEvents:", error);
    }
  };

  const fetchUserData = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/auth/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchScheduledEvents = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/event/booked", {
        method:"POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      
      });
      if (response.ok) {
        const data = await response.json();
        setScheduledEvents(data);
        console.log(data);
      } else {
        console.error("Error fetching scheduled events");
      }
    } catch (error) {
      console.error("Error fetching scheduled events:", error);
    }
  };

 

  const handleFieldChange = (field, value) => {
    setEditedFields({
      ...editedFields,
      [field]: value,
    });
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/event/${editingEvent.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedFields),
        }
      );

      if (response.ok) {
        setUserEvents((prevUserEvents) =>
          prevUserEvents.map((event) =>
            event.id === editingEvent.id ? { ...event, ...editedFields } : event
          )
        );

        setEditingEvent(null);
        setEditedFields({});

        window.location.reload();
      } else {
        console.error("Failed to update event.");
      }
    } catch (error) {
      console.error("Error during event update:", error);
    }
  };

  const handleDeleteClick = async (eventId) => {
    try {
      const response = await fetch(`http://localhost:5000/event/${eventId}`, {
        method: "DELETE",
        headers: {
          Authorization: `${token}`,
        },
      });

      if (response.ok) {
        setUserEvents((prevUserEvents) =>
          prevUserEvents.filter((event) => event.id !== eventId)
        );

        window.location.reload();
      } else {
        console.error("Failed to delete event.");
      }
    } catch (error) {
      console.error("Error during event deletion:", error);
    }
  };

  const handleCancelEventClick = async (event_id) => {
    try {
      const response = await fetch(`http://localhost:5000/ticket/unbook`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event_id: event_id,
        })
      });

      if (response.ok) {
        setScheduledEvents((prevScheduledEvents) =>
          prevScheduledEvents.filter((ticket) => ticket?.id !== event_id)
        );

        window.location.reload();
      } else {
        console.error("Failed to cancel event.");
      }
    } catch (error) {
      console.error("Error during event cancellation:", error);
    }
  };

  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="navbar">
      <div className='logo'><a href="/">EventNation</a></div>
      <ul className='links'>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href='/events'>Events</a></li>
        <li><a href="/contact">contact</a></li>
        <span>{userData.username}</span>
        
      </ul>
      </nav>

      <div className="dashboard-content">
        <div className="left-div">
          <h1>My Events</h1>
          {userEvents.length === 0 ? (
            <p>No events available.</p>
          ) : (
            userEvents.map((event) => (
              <div key={event.id} className="event-item">
  
                    <h3>{event.name ? event.name : "No Title"}</h3>
                    <p className="first-p">
                      {event.details ? event.details : "No Description"}
                    </p>
                    <p className="second-p">
                      On {event.date ? formatDate(event.date) : "No Date"}
                    </p>
                    <p className="second-p">
                      total collection : $ {event.total_collection ? event.total_collection : "No Price"}
                    </p>
                    <p className="second-p">
                      tickets available :  {event.available_tickets ? event.available_tickets : "No Price"}
                    </p>
                    <p className="third-p">
                      Venue : {event.location ? event.location : "No Venue"}
                    </p>
                    <p className="third-p">
                      price : $ {event.ticket_price ? event.ticket_price : "No Price"}
                    </p>
                    
                    <div className="but-div">
                      {/* <button
                        className="Edit"
                        onClick={() => handleEditClick(event)}
                      >
                        Edit
                      </button> */}
                      <button
                        className="Delete"
                        onClick={() => handleDeleteClick(event.id)}
                      >
                        Delete
                      </button>
                    </div>
              </div>
            ))
          )}
        </div>

        <div className="right-div">
          <h1>My Scheduled Events</h1>
          {scheduledEvents.length === 0 ? (
            <p>No scheduled events available.</p>
          ) : (
            scheduledEvents.map((ticket) => (
              <div key={ticket?.id} className="event-item">
                <p>ticket</p>
                <h3>{ticket?.name}</h3>
                <p className="first-p">{ticket?.details}</p>
                <p className="second-p">
                  {ticket?.date
                    ? formatDate(ticket.date)
                    : "No Date"}
                </p>
                <button
                  className="Cancel"
                  onClick={() => handleCancelEventClick(ticket.id)}
                >
                  Cancel Event
                </button>
              </div>
            ))
          )}

          {showUserProfileModal && (
        <UserProfileModel
          user={user}
          onClose={closeUserProfileModal}
        />
      )}
        </div>
      </div>
      
    </div>
  );
}

export default Dashboard;
