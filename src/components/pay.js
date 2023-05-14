import StripeCheckout from 'react-stripe-checkout';
import emailjs from '@emailjs/browser';

export default function Pay() {

  const name = "Varad"
  const email = "varadpundlik@gamail.com"
  const onToken = (token) => {
    console.log(token)
  }

  const sendEmail = (event) => {
    event.preventDefault()

    emailjs.send('service_665bv0c', 'template_ibhwtnq', { name, email }, 'YLxNvOewmXsjtOdEn')
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
        closed={sendEmail.bind(this)}
        allowRememberMe // "Remember Me"
        stripeKey='pk_test_51N7Lb8SCz50kShAtq2v8kWWIGi1iRWdkvhg8B1kiP8WUY6PIt2Sh471Kdwl1saCVBBBye4rRNVnU7o72JnzAq8IL00Kd23fIKE'
       >
        <button className="btn btn-primary" onClick={sendEmail}>
          Pay with card
        </button>
      </StripeCheckout>
    </div>
  );
};