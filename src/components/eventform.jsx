import React from "react";
import "./event-form.css";
import UniqueCode from "./uniquecode";
import { useState } from "react";


function EventForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [frequency, setFrequency] = useState(0);
  const [price, setPrice] = useState(0);
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };


  const handleNameChange = (event) => {
    if (!submitted) {
      setName(event.target.value);
    }
  };


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  const handleTicketTypeChange = (event) => {
    const selectedTicketType = event.target.value;
    setTicketType(selectedTicketType);


    if (selectedTicketType === "Basic") {
      setPrice(500);
    } else if (selectedTicketType === "Premium") {
      setPrice(1000);
    } else if (selectedTicketType === "Deluxe") {
      setPrice(2000);
    }
  };


  const handleFrequency = (event) => {
    setFrequency(event.target.value);
  };


  const calculateTotalPrice = () => {
    const totalPrice = price * parseInt(frequency, 10);
    return totalPrice.toFixed(2); // Format the price to two decimal places
  };


 


 


  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            disabled={submitted} // Disable the input field when submitted is true
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="ticketType">Ticket Type</label>
          <select className="form-control" id="ticketType" name="ticketType" value={ticketType} onChange={handleTicketTypeChange}>
            <option>Basic</option>
            <option>Premium</option>
            <option>Deluxe</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Price"
            value={price}
            onChange={() => {}}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="frequency">Number of Tickets</label>
          <input
            type="text"
            className="form-control"
            id="frequency"
            placeholder="Number of Tickets"
            value={frequency}
            onChange={handleFrequency}
          />
        </div>


        <div className="form-group">
          <label htmlFor="totalPrice">Total Price</label>
          <input
            type="text"
            className="form-control"
            id="totalPrice"
            placeholder="Total Price"
            value={calculateTotalPrice()}
            onChange={() => {}}
            disabled
          />
        </div>
       


        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {submitted && <UniqueCode name={name} email={email} ticketType={ticketType} frequency={frequency} totalPrice={calculateTotalPrice()} />}
    </div>
  );
}


export default EventForm;




