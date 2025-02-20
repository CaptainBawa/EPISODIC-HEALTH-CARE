import React, { useState } from 'react';

const Testimonies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonies = [
    {
      id: 1,
      name: 'Kwesi Mensah',
      text: `I have been sourcing apples and grapes from Boafo Adom Nyame for my grocery store for over a year.
      Their wholesale pricing is unbeatable and the quality is consistently excellent.
       Every delivery arrives fresh and ready to boost my sales – truly a game changer for my business.`,
    },
    {
      id: 2,
      name: 'Ama Owusu',
      text: `Shopping at Boafo Adom Nyame is always a delight. Their retail selection of apples and grapes is second to none.
      The fruits are crisp, juicy, and packed with flavor.
      I appreciate the attention to quality and the friendly service that keeps me coming back!`,
    },
    {
      id: 3,
      name: 'Frank Agyemang',
      text: `As a chef running a high-end restaurant, quality produce is a must.
      Boafo Adom Nyame's wholesale supply of apples and grapes consistently meets my high standards.
      Their reliable service and premium fruits have elevated my dishes, making every meal a masterpiece.`,
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
            key={`${index + 1}`}
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
