import React from "react";
import QRCode from "qrcode.react";
import { v4 as uuidv4 } from "uuid";

function Ticket(props) {
  const { name, ticketType, email, frequency, totalPrice } = props;
  const ticketKey = uuidv4();

  return (
    <div id = "ticket-container">
      <h3>Name: {name}</h3>
      <p>Email: {email} </p>
      <p>Ticket Type: {ticketType}</p>
      <p>Number of Tickets: {frequency}</p>
      <p>Total Price: {totalPrice}</p>
      <QRCode value={ticketKey} />
    </div>
  );
}

export default Ticket;