import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Loading projects...</p>
    </div>
  );
}

export default LoadingSpinner;