import React from 'react';
import './About.css';
import Footer from '../../Components/Footer';

const About = () => {
  return (
  <>
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About LuxHomes</h1>
          <p>Your trusted partner in finding the perfect home</p>
        </div>
      </div>

      {/* Story Section */}
      <div className="about-section">
        <div className="about-grid">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2026, LuxHomes began with a simple mission: to make 
              finding your dream home effortless and enjoyable. What started 
              as a small team of real estate enthusiasts has grown into a 
              trusted platform connecting thousands of happy homeowners with 
              their perfect properties.
            </p>
            <p>
              We believe that everyone deserves a place to call home. Whether 
              you're looking for a cozy apartment, a family house, or a luxury 
              estate, LuxHomes is here to guide you every step of the way.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa" 
              alt="Our Story"
            />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="about-section mission">
        <div className="about-grid reverse">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
              alt="Our Mission"
            />
          </div>
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              To provide a seamless, transparent, and enjoyable home-finding 
              experience for everyone. We leverage technology to connect 
              genuine buyers with trusted sellers, eliminating unnecessary 
              stress and complexity from the process.
            </p>
            <p>
              We're committed to quality, integrity, and innovation in 
              everything we do, ensuring that every transaction is smooth 
              and satisfactory for all parties involved.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Trust & Integrity</h3>
            <p>We build lasting relationships through honesty and transparency.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">⭐</div>
            <h3>Excellence</h3>
            <p>We strive for the highest quality in every interaction.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>We embrace technology to enhance your experience.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Community</h3>
            <p>We care about the people and places we serve.</p>
          </div>
        </div>
      </div>


      
    </div>
    <Footer/>
  </>
  );
};

export default About;