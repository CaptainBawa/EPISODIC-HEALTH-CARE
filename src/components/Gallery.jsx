import React, { useState } from 'react';
import medi from '../assets/medi.jpg';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const galleries = [
    {
      id: 1,
      img: medi,
    },
    {
      id: 2,
      img: medi,
    },
    {
      id: 3,
      img: medi,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? galleries.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === galleries.length - 1 ? 0 : prev + 1));
  };

  // Keyboard accessibility for dots
  const handleDotKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setActiveIndex(index);
    }
  };

  return (
    <div className="testimonies">
      <h2>Gallery</h2>
      <div className="slider-wrapper">
        <div
          className="testimonies-container"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {galleries.map((gallery) => (
            <div className="testimony image" key={gallery.id}>
              <img src={gallery.img} alt="Episodic" />
            </div>
          ))}
        </div>
        <button type="button" className="slider-arrow prev" onClick={handlePrev}>&#10094;</button>
        <button type="button" className="slider-arrow next" onClick={handleNext}>&#10095;</button>
      </div>
      <div className="dots-container">
        {galleries.map((_, index) => (
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

export default Gallery;
