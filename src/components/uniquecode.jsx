import React from "react";
import QRCode from "qrcode.react";
import { v4 as uuidv4 } from "uuid";

function Ticket(props) {
  const { name, ticketType } = props;
  const ticketKey = uuidv4();

  return (
    <div>
      <h3>{name}</h3>
      <p>Ticket Type: {ticketType}</p>
      <QRCode value={ticketKey} />
    </div>
  );
}

export default Ticket;