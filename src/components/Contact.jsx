import './Contact.css'

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jndp9xb', 'template_uxrvdsk', form.current, {
      publicKey: 'EdVKXWm2R6ckCvIXk',
    })
      .then(() => {
        console.log('SUCCESS!');
        setMessageSent(true);
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  };

  return (
    <div className="container">
      {!messageSent ?
        <form ref={form} onSubmit={sendEmail}>
          <h2>Send a message</h2>
          <label for="name">Name</label>
          <input id="name" type="text" name="name" />
          <label for="email">Email</label>
          <input id="email" type="email" name="email" />
          <label for="message">Message</label>
          <textarea id="message" name="message" />
          <input type="submit" value="Send" />
        </form>
        : <p>Thank you for your message.</p>
      }
    </div>
  );
};