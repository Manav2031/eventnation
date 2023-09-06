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

  const [booking, setBooking] = useState([{ id: 1, name: "Varad", email: "varadpundlik@gmail.com", status:"Done",price:2000}])

  function addBooking(note) {
    setBooking(prevNotes => {
        return [...prevNotes, note];
    });
    console.log(booking)
}

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/events' element={<EventForm  onAdd={addBooking}/>} />
        <Route exact path='/pay' element={<Pay />} />
        <Route exact path='/event-details' element={<EventDetails />} />
        <Route exact path='/booking' element={<EventBooking bookings={booking} />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
