import React from 'react';
import profileImage from '../assets/image.png';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  const technologies = [
    'React', 'TypeScript', 'JavaScript (ES6+)', 'Vite',
    'React Router', 'Context API', 'HTML5', 'CSS3', 'Git'
  ];

  return (
    <div className="about-page">
      <section className="card about-header">
        <img src={profileImage} alt="Your Name" className="about-photo" />
        <div>
          <h2>Tilak Vasu</h2>
          <p className="bio">
            I am a passionate frontend developer with a love for building intuitive and performant web applications. My journey into code started with a curiosity for how things work on the web, and it has evolved into a career where I can solve problems and create beautiful user experiences. I'm motivated by learning new technologies and collaborating with teams to bring ideas to life.
          </p>
        </div>
      </section>

      <section className="card">
        <h3>Experience & Education</h3>
        <p>I have completed my studies from DPS Bopal and B.tech from Nirma University. Currently seeking new opportunities to apply my skills in a challenging and rewarding environment. My background includes freelance projects and extensive personal learning in modern web development practices.</p>
        <p><strong>Certification:</strong> React Foundations & Modern Development</p>
      </section>

      <section className="card">
        <h3>Technologies Used in This Project</h3>
        <div className="tech-list">
          {technologies.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;