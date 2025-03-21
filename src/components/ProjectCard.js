import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const images = Array.isArray(project.images) && project.images.length > 0
    ? project.images
    : ['https://via.placeholder.com/300x200?text=No+Image'];

  // Price formatting function
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price || 0);
  };

  // Toggle favorite status
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Construct Google Maps URL using coordinates
  const googleMapsUrl = project.generalInfo.coordinates
    ? `https://www.google.com/maps?q=${project.generalInfo.coordinates.latitude},${project.generalInfo.coordinates.longitude}`
    : '#';

  return (
    <div className="project-card">
      <div className="card-image">
        <ImageSlider images={images} />

        <div className="badge">New</div>

        <div className="favorite-button" onClick={toggleFavorite}>
          <i className={`heart-icon ${isFavorite ? 'favorited' : ''}`}>❤️</i>
        </div>
      </div>

      <div className="card-content">
        <div className="card-content__box">
          <h3 className="card-title">{project.generalInfo.name || 'Unnamed Project'}</h3>
          <p className="card-price">{formatPrice(project.generalInfo.price)}</p>
        </div>

        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <p className="card-location">{project.generalInfo.province || 'Location not specified'}</p>
        </a>

        <div className="card-details">
          <span>{project.generalInfo.rooms || 0} Beds</span>
          <span>{project.generalInfo.bathrooms || 0} Bath</span>
          <span>{project.generalInfo.living_area || 0} sqft</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
