import React, { useState } from 'react';
import '../styles/Carousel.scss';

const Carousel = ({ pictures, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carousel-container">
      <img src={pictures[currentImageIndex]} alt={title} className="carousel-image" />
      {pictures.length > 1 && (
        <>
          <button className="prev-button" onClick={handlePrevImage}>
            <span className="image-icone"></span>
          </button>
          <button className="next-button" onClick={handleNextImage}>
            <span className="image-icone rotate"></span>
          </button>
          <div className="image-counter">
            {currentImageIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
