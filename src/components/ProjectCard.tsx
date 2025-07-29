import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, technologies, link }) => {
  return (
    <div className="card project-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="tech-list">
        {technologies.map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;