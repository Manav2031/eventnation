import StripeCheckout from 'react-stripe-checkout';
import emailjs from '@emailjs/browser';
import React,{useRef} from 'react';

export default function Pay() {

  const onToken = (token) => {
    console.log(token)
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_665bv0c', 'template_ibhwtnq', form.current, 'YLxNvOewmXsjtOdEn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  

  return (
    <div className='Pay'>
      <StripeCheckout
        token={onToken}
        name='spaceCon Ticket '
        currency='INR'
        amount={1400}
        allowRememberMe // "Remember Me"
        stripeKey='pk_test_51N7Lb8SCz50kShAtq2v8kWWIGi1iRWdkvhg8B1kiP8WUY6PIt2Sh471Kdwl1saCVBBBye4rRNVnU7o72JnzAq8IL00Kd23fIKE'
       >
        <button className="btn btn-primary" >
          Pay with card
        </button>
      </StripeCheckout>
      <form ref={form} onSubmit={sendEmail}>
      <h4>Fill this form after successfull payment</h4>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <input type="submit" value="Send" /></form>
    </div>
  );
};