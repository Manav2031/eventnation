import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EventForm from './components/eventform';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pay from './components/pay';
import EventDetails from './components/eventDetails';
import { useState } from 'react';
import EventBooking from './components/eventBooking';
function App() {

  const [booking, setBooking] = useState([{ id: 1, name: "John Doe", email: "johndoe@example.com", status:"Done",price:1000},
  { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
  { id: 3, name: "Bob Smith", email: "bobsmith@example.com" },])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/events' element={<EventForm />} />
        <Route exact path='/pay' element={<Pay />} />
        <Route exact path='/event-details' element={<EventDetails />} />
        <Route exact path='/booking' element={<EventBooking bookings={booking} />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
