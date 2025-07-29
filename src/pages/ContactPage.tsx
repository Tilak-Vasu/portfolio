import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a service like EmailJS or a backend.
    // For this project, we'll just simulate it.
    console.log('Form submitted:', formState);
    setSubmitted(true);
  };

  return (
    <div className="contact-page card">
      <h2>Contact Me</h2>
      {submitted ? (
        <p className="success-message">Thank you for your message! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required onChange={handleChange} value={formState.name} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required onChange={handleChange} value={formState.email} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required onChange={handleChange} value={formState.message}></textarea>
          </div>
          <button type="submit" className="primary">Submit</button>
        </form>
      )}
      <div className="contact-info">
        <h3>Or reach out directly:</h3>
        <p>Email: <a href="mailto:tilakvasu02@gmail.com">tilakvasu02@gmail.com</a></p>
        <p>
          Socials:
          <a href="https://in.linkedin.com/in/tilak-vasu"> LinkedIn </a> |
          <a href="#" target="_blank" rel="noopener noreferrer"> GitHub </a> 
        </p>
      </div>
    </div>
  );
};

export default ContactPage;