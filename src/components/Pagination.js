import React, { useEffect } from 'react';
import './Pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const maxPageNumbers = 5;

  const getPageNumbers = () => {
    if (totalPages <= maxPageNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    const halfWay = Math.floor(maxPageNumbers / 2);
    const isStartPage = currentPage <= halfWay;
    const isEndPage = currentPage >= totalPages - halfWay - 1;

    if (isStartPage) {
      return Array.from({ length: maxPageNumbers }, (_, i) => i);
    }

    if (isEndPage) {
      return Array.from({ length: maxPageNumbers }, (_, i) => totalPages - maxPageNumbers + i);
    }

    return Array.from({ length: maxPageNumbers }, (_, i) => currentPage - halfWay + i);
  };

  useEffect(() => {
    window.scrollTo(0, window.scrollY);
  }, [currentPage]);

  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button
        className="page-button"
        onClick={() => onPageChange(0)}
        disabled={currentPage === 0}
      >
        &laquo;
      </button>

      <button
        className="page-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        &lsaquo;
      </button>

      {getPageNumbers().map(pageNum => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          className={`page-button ${currentPage === pageNum ? 'active' : ''}`}
        >
          {pageNum + 1}
        </button>
      ))}

      <button
        className="page-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
      >
        &rsaquo;
      </button>

      <button
        className="page-button"
        onClick={() => onPageChange(totalPages - 1)}
        disabled={currentPage === totalPages - 1}
      >
        &raquo;
      </button>

    </div>
  );
}

export default Pagination;
