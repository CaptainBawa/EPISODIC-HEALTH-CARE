import React, { useState } from 'react';
import opd from '../assets/opd.jpg';
import despen from '../assets/despen.jpg';
import lab from '../assets/lab.jpg';
import scan from '../assets/scan.jpg';
import pro from '../assets/pro.jpg';
import pro2 from '../assets/pro2.jpg';
import opd2 from '../assets/opd2.jpg';
import lab1 from '../assets/lab1.jpg';
import scan1 from '../assets/scan1.jpg';
import despen4 from '../assets/despen4.jpg';
import opd4 from '../assets/opd4.jpg';
import pro3 from '../assets/pro3.jpg';
import pro6 from '../assets/pro6.jpg';
import pro9 from '../assets/pro9.jpg';
import despen3 from '../assets/despen3.jpg';
import lab2 from '../assets/lab2.jpg';
import opd3 from '../assets/opd3.jpg';
import despen2 from '../assets/despen2.jpg';
import opd5 from '../assets/opd5.jpg';
import pro1 from '../assets/pro1.jpg';
import pro4 from '../assets/pro4.jpg';
import pro5 from '../assets/pro5.jpg';
import pro7 from '../assets/pro7.jpg';
import pro8 from '../assets/pro8.jpg';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const galleries = [
    {
      id: 1,
      title: 'OPD',
      img: opd,
    },
    {
      id: 2,
      title: 'LABORATORY',
      img: lab,
    },
    {
      id: 3,
      title: 'SCAN ROOM',
      img: scan,
    },
    {
      id: 4,
      title: 'DISPENSARY',
      img: despen,
    },
    {
      id: 5,
      title: 'PRODUCTION CENTER',
      img: pro,
    },
    {
      id: 6,
      title: 'PRODUCTION CENTER',
      img: pro2,
    },
    {
      id: 7,
      title: 'OPD',
      img: opd2,
    },
    {
      id: 8,
      title: 'LABORATORY',
      img: lab1,
    },
    {
      id: 9,
      title: 'SCAN ROOM',
      img: scan1,
    },
    {
      id: 10,
      title: 'DISPENSARY',
      img: despen4,
    },
    {
      id: 11,
      title: 'OPD',
      img: opd4,
    },
    {
      id: 12,
      title: 'PRODUCTION CENTER',
      img: pro3,
    },
    {
      id: 13,
      title: 'PRODUCTION CENTER',
      img: pro6,
    },
    {
      id: 14,
      title: 'PRODUCTION CENTER',
      img: pro9,
    },
    {
      id: 15,
      title: 'DISPENSARY',
      img: despen3,
    },
    {
      id: 16,
      title: 'LABORATORY',
      img: lab2,
    },
    {
      id: 17,
      title: 'OPD',
      img: opd3,
    },
    {
      id: 18,
      title: 'DISPENSARY',
      img: despen2,
    },
    {
      id: 19,
      title: 'OPD',
      img: opd5,
    },
    {
      id: 20,
      title: 'PRODUCTION CENTER',
      img: pro1,
    },
    {
      id: 21,
      title: 'PRODUCTION CENTER',
      img: pro4,
    },
    {
      id: 22,
      title: 'PRODUCTION CENTER',
      img: pro5,
    },
    {
      id: 23,
      title: 'PRODUCTION CENTER',
      img: pro7,
    },
    {
      id: 24,
      title: 'PRODUCTION CENTER',
      img: pro8,
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
              <h3>{gallery.title}</h3>
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

export default Gallery;
