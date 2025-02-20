import React from 'react';
import contact from '../assets/contact.jpg';

const Contact = () => (
  <div id="contact" className="contact-section">
    <h2 className="section-title">Contact Us</h2>
    <div className="contact-content">
      <img
        src={contact}
        alt="Contact us"
        className="contact-image"
      />
      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p className="contact-detail">📞 024 958 7290</p>
        <p className="contact-detail">📱 020 749 4989</p>
        <p className="contact-detail">✉️ info@example.com</p>
        <p className="contact-address">
          Dunkwa-On-Offin, Ghana
          <br />
          Zongo Road
          <br />
          Opposite Asante Kramo Drugstore
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
