import './App.css';
import Email from './components/email';
import CheckoutForm from './components/payements';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Pay from './components/pay';
import EventForm from "./components/eventform";



function App() {
  return (
    <div className="App">
      <EventForm />
    </div>
  );
}

export default App;
