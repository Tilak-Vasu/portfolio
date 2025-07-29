import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './ProjectsPage.css';

const projects = [
  {
    name: 'This Portfolio Website',
    description: 'A comprehensive portfolio and todo app built with React, TypeScript, and Vite. Features client-side routing, context for state management, and a theme switcher.',
    technologies: ['React', 'TypeScript', 'Vite', 'React Router'],
    link: 'https://github.com/your-username/your-repo' 
  },
  {
    name: 'E-commerce Frontend',
    description: 'A mock e-commerce site frontend demonstrating product listings, filtering, and a shopping cart. State managed with Context API.',
    technologies: ['React', 'CSS Modules', 'Context API'],
    link: '#'
  },
  {
    name: 'Data Visualization Dashboard',
    description: 'A dashboard for visualizing data from a public API using Chart.js. Includes interactive charts and data tables.',
    technologies: ['React', 'Chart.js', 'API Integration'],
    link: '#'
  }
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <p>Here are some of the projects I've worked on.</p>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;