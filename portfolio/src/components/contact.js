import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
// console logging for testing purposes
    console.log({ name, email, message });
  };

  const validateEmail = (email) => {
    // Email validation regex pattern
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onChange={handleEmailChange} />
          {!validateEmail(email) && <span>Please enter a valid email address.</span>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={handleMessageChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
