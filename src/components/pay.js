import './pay.css';
import CheckoutForm from './payements';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React,{useState,useEffect} from 'react';

const stripePromise = loadStripe("pk_test_51N7Lb8SCz50kShAtq2v8kWWIGi1iRWdkvhg8B1kiP8WUY6PIt2Sh471Kdwl1saCVBBBye4rRNVnU7o72JnzAq8IL00Kd23fIKE");

function Pay() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'flat',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>);
}

export default Pay;
