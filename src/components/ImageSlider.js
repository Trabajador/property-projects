import React, { useState } from 'react';
import './ImageSlider.css';

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      className="slider-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {images[currentIndex] ? (
        <div className="slider-image">
          <img
            src={images[currentIndex].large || images[currentIndex].original}
            alt={`Slide ${currentIndex + 1}`}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="slider-image">
          <img src="https://via.placeholder.com/300x200?text=No+Image"
          alt="Not available"
          loading="lazy"
        />
        </div>
      )}

      {isHovering && images.length > 1 && (
        <>
          <div className="slider-arrow left-arrow" onClick={goToPrevious}>
            &#10094;
          </div>
          <div className="slider-arrow right-arrow" onClick={goToNext}>
            &#10095;
          </div>
        </>
      )}
    </div>
  );
}
export default ImageSlider;
