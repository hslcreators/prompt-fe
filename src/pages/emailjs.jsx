// ContactUs.js

import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    useEffect(()=>{
        emailjs.init('tosYeP7bcd2_EKVQW')
    }, [])
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace with your actual SERVICE_ID and TEMPLATE_ID
    emailjs
      .sendForm('service_i6fh7vg', 'template_veuueef', form.current)
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
        },
        (error) => {
          console.error('Email sending failed:', error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label></label>
      <input type="text" name="name"/>
      <label></label>
      <input type="email" name="email" />
      {/* Add other form fields as needed */}
      <input type="submit" value="Send OTP" />
    </form>
  );
};

export default ContactUs;
