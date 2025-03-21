import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ message, retry }) {
  return (
    <div className="error-container">
      <div className="error-content">
        <h3>Error Loading Projects</h3>
        <p>{message || 'An unexpected error occurred.'}</p>
        <button className="retry-button" onClick={retry}>
          Try Again
        </button>
      </div>
    </div>
  );
}

export default ErrorMessage