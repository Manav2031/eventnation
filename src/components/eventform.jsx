import React from "react";
import "./event-form.css";
import UniqueCode from "./UniqueCode";
import ReactDOM from 'react-dom/client';
function EventForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const ticketType = event.target.elements.ticketType.value;
    ReactDOM.render(
      <UniqueCode name={name} ticketType={ticketType} />,
      document.getElementById("ticket-container")
    );
  };

  return (
    <form className="form-container">
          <div className="form-group">
    <label htmlFor="exampleInputName1">Name</label>
    <input type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email Address</label>
    
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> 
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Ticket Type</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Basic</option>
      <option>Premium</option>
      <option>Deluxe</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputQuantity1">Quantity (Per ticket cost Rs. 500) </label>
    <input type="text" className="form-control" id="exampleInputQuantity1" placeholder="Quantity" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  );
}

export default EventForm;
