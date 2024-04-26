// Carousel.jsx
import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file for styling

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 3000); // Change the interval as needed (e.g., every 3 seconds)
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  // Function to navigate to a specific slide
  const navigateToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        <div className="carousel-overlay">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>
          <button onClick={() => window.open(slides[currentSlide].link)}>Read More</button>
        </div>
      </div>
      <div className="dot-navigation">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={index === currentSlide ? "dot active" : "dot"}
            onClick={() => navigateToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
