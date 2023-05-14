import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Email from './components/email';
import CheckoutForm from './components/payements';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Pay from './components/pay';
import EventForm from "./components/eventform";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/email' element={<Email />} /> 
        <Route path='/checkoutform' element={<CheckoutForm />} /> 
        <Route path='/pay' element={<Pay />} />
        <Route path='/eventform' element={<EventForm />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
