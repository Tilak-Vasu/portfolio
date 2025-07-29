import React from 'react';
import { Link } from 'react-router-dom';
import WeatherWidget from '../components/WeatherWidget';
import profileImage from '../assets/image.png';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      {/* ✅ Weather Card Fixed at Bottom Right */}
      <div className="home-weather-widget-wrapper fade-in fade-in-delay-3">
        <WeatherWidget />
      </div>

      {/* ✅ Centered Hero Section */}
      <div className="home-hero-wrapper">
        <section className="hero-content-main fade-in fade-in-delay-1">
          <div className="profile-photo-wrapper fade-in fade-in-delay-1">
            <img src={profileImage} alt="Tilak Vasu" className="profile-photo" />
          </div>

          <div className="profile-info-wrapper fade-in fade-in-delay-2">
            <h1 className="profile-name">Tilak Vasu</h1>
            <p className="profile-title">Frontend Developer | React Specialist</p>
            <div className="home-about-summary">
              <p>
  I enjoy working with modern tools like <span className="highlight">React, Django, and TypeScript</span>, and I constantly explore new technologies to stay ahead of the curve. 
  Beyond coding, I have a keen eye for UI design and strive to deliver delightful user experiences.
  I'm currently seeking opportunities to contribute to innovative frontend projects where I can grow, 
  collaborate, and make a meaningful impact. Let's build something amazing together!

                <Link to="/about" className="read-more-link">...Read more about my background</Link>
</p>
            </div>
            <div className="cta-container">
              <Link to="/projects">
                <button className="primary">View My Work</button>
              </Link>
            </div>
          </div>
        </section>
      </div>


      
    </div>
  );
};

export default HomePage;
