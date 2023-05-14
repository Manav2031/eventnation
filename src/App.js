import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EventForm from './components/eventform';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pay from './components/pay';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/events' element={<EventForm />} />
        <Route exact path='/pay' element={<Pay />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
