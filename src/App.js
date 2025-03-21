import React, { useState, useEffect } from 'react';
import './App.css';
import ProjectGrid from './components/ProjectGrid';
import Pagination from './components/Pagination';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchProjects(currentPage);
  }, [currentPage]);

  const fetchProjects = async (page) => {
    setLoading(true);
    setError(null);

    const apiKey = process.env.REACT_APP_API_KEY;
    const secretKey = process.env.REACT_APP_SECRET_KEY;

    try {
        const response = await fetch(
          `https://crm.server.pro-part.es/api/v1/secondary-projects/integration/projects?accessKey=${apiKey}&secretKey=${secretKey}&isPagination=true&size=30&page=${page}`,            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data && Array.isArray(data.projects) && data.projects.length > 0) {
            setProjects(data.projects);
            setTotalPages(data.totalPages || 1);
        } else {
            throw new Error("Invalid data structure received from API");
        }
    } catch (err) {
        setError(err.message);
        console.error("❌ Error fetching projects:", err);
    } finally {
        setLoading(false);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Property Projects</h1>
      </header>

      <main>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} retry={() => fetchProjects(currentPage)} />
        ) : (
          <>
            <ProjectGrid projects={projects} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </main>

      <footer>
        <p>© 2025 Property Projects</p>
      </footer>
    </div>
  );
}

export default App;