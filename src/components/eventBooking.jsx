import React, { useState } from "react";
import './eventBooking.css'

export default function EventBooking(props) {
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
