import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Email(){
  const form = useRef();

  const sendEmail = () => {
    e.preventDefault();

    emailjs.sendForm('service_665bv0c', 'template_ibhwtnq', form.current, 'YLxNvOewmXsjtOdEn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <input type="submit" value="Send" />
    </form>
  );
};