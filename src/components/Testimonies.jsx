import React, { useState } from 'react';

const Testimonies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonies = [
    {
      id: 1,
      name: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
  };

  // Keyboard accessibility for dots
  const handleDotKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setActiveIndex(index);
    }
  };

  return (
    <div className="testimonies">
      <h2>Testimonies</h2>
      <div className="slider-wrapper">
        <div
          className="testimonies-container"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonies.map((testimony) => (
            <div className="testimony" key={testimony.id}>
              <h3>{testimony.name}</h3>
              <p>{testimony.text}</p>
            </div>
          ))}
        </div>
        <button type="button" className="slider-arrow prev" onClick={handlePrev}>&#10094;</button>
        <button type="button" className="slider-arrow next" onClick={handleNext}>&#10095;</button>
      </div>
      <div className="dots-container">
        {testimonies.map((_, index) => (
          <button
            onKeyDown={(e) => handleDotKeyDown(e, index)}
            role="tab"
            type="button"
            key={0}
            aria-label={`Testimony ${index + 1}`}
            aria-selected={index === activeIndex}
            tabIndex={0}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
