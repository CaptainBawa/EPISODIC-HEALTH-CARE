import React from 'react';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const HealthcareDirections = ({ routes }) => (
  <div id="location" className="directions-container">
    <h2 className="directions-title">How to Find Us</h2>
    <div className="routes-grid">
      {routes.map((route) => (
        <div key={route.from} className="route-card">
          <div className="route-header">
            <FaMapMarkerAlt className="marker-icon" />
            <h3 className="starting-point">
              From
              {' '}
              {route.from}
              {' '}
            </h3>
          </div>
          <div className="route-steps">
            {route.steps.map((step, stepIndex) => (
              <div key={`${route.from}-${step}`} className="step-container">
                <div className="step-number">{stepIndex + 1}</div>
                <div className="step-content">{step}</div>
                {stepIndex < route.steps.length - 1 && (
                  <FaArrowRight className="arrow-icon" />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

HealthcareDirections.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string.isRequired,
      steps: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export default HealthcareDirections;
