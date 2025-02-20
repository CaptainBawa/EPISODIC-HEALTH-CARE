import React from 'react';

const Services = () => (
  <div id="services">
    <h2 className="section-title">Our Services</h2>
    <div className="services-container">
      <div className="service-card">
        <i className="fas fa-stethoscope fa-3x" />
        <h3>General Health Care</h3>
        <p>Comprehensive medical care for all ages with experienced physicians.</p>
      </div>

      <div className="service-card">
        <i className="fas fa-procedures fa-3x" />
        <h3>Ultrasound/Scan Center</h3>
        <p>State-of-the-art imaging services for accurate diagnostics.</p>
      </div>

      <div className="service-card">
        <i className="fas fa-microscope fa-3x" />
        <h3>Laboratory</h3>
        <p>Advanced laboratory testing with quick result turnaround.</p>
      </div>

      <div className="service-card">
        <i className="fas fa-dumbbell fa-3x" />
        <h3>Physiotherapy</h3>
        <p>Customized rehabilitation programs for recovery and mobility.</p>
      </div>

      <div className="service-card">
        <i className="fas fa-prescription-bottle fa-3x" />
        <h3>Detoxification</h3>
        <p>Professional detox programs for body cleansing and renewal.</p>
      </div>

      <div className="service-card">
        <i className="fas fa-utensils fa-3x" />
        <h3>Dietary Advice</h3>
        <p>Personalized nutrition plans for optimal health and wellness.</p>
      </div>
    </div>
  </div>
);

export default Services;
