import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';

function ProjectGrid({ projects }) {
  return (
    <div className="project-grid">
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))
      ) : (
        <p className="no-projects">No projects available.</p>
      )}
    </div>
  );
}

export default ProjectGrid;