import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setShowError(true);
      return;
    }

    // Process the form submission
    console.log({ name, email, message });

    // Clear the form inputs
    setName('');
    setEmail('');
    setMessage('');
    setShowError(false);
    setSubmitted(true);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowError(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      {submitted ? (
        <p className="thank-you-message">Thank you! I will be in contact with you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={email} onChange={handleEmailChange} placeholder="Enter your email address" />
            {showError && <span className="error-message">Please enter a valid email address.</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" value={message} onChange={handleMessageChange} placeholder="Enter your message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
