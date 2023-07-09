import React from "react";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xyyqgoag");

  function ContactForm() {
    if (state.succeeded) {
      return <p>Thank you, I'll be in contact with you soon!</p>;
    }
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    );
  }

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
