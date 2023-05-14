import React, { useState } from "react";
import './eventBooking.css'

export default function EventBooking(props) {
  const [bookings, setBookings] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
    { id: 3, name: "Bob Smith", email: "bobsmith@example.com" },
  ]);

  return (
    <div className="Event">
      <h1>Event Booking</h1>
      <ul>
        {props.bookings.map((booking) => (
          <li key={booking.id}>Name :{booking.name} Email :{booking.email} Status:{booking.status} Total Price:{booking.price}</li>
        ))}
      </ul>
    </div>
  );
}
