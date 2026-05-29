import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <h2 className="footer-logo">🏠 LuxHomes</h2>
            <p className="footer-description">
              Your trusted partner in finding the perfect home. 
              We connect dream homes with happy homeowners.
            </p>
            {/* <div className="footer-social">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📸</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">🔗</a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/houses">Houses</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

        

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="contact-list">
              <li>📍 123 Luxury Lane, Beverly Hills, CA</li>
              <li>📞 07039155324</li>
              <li>✉️ aluiyiola40@gmail.com</li>
              <li>🕒 Mon-Fri: 9am - 6pm</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LuxHomes. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacypolicy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;