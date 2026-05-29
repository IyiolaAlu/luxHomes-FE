import React from 'react';
import './PrivacyPolicy.css';
import Footer from '../../Components/Footer';

const PrivacyPolicy = () => {
  return (
<>
    <div className="privacy-container">
      {/* Hero Section */}
      <div className="privacy-hero">
        <div className="privacy-hero-overlay"></div>
        <div className="privacy-hero-content">
          <h1>Privacy Policy</h1>
          <p>Your privacy matters to us</p>
        </div>
      </div>

      <div className="privacy-content">
        <div className="privacy-card">
          <p className="privacy-last-updated">Last Updated: May 29th, 2026</p>

          {/* Introduction */}
          <section className="privacy-section">
            <h2>Introduction</h2>
            <p>
              At LuxHomes, we respect your privacy and are committed to protecting 
              your personal data. This privacy policy explains how we collect, use, 
              and safeguard your information when you use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="privacy-section">
            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and location</li>
              <li><strong>Account Information:</strong> Username, password, and profile preferences</li>
              <li><strong>Property Preferences:</strong> Search history, saved properties, and favorites</li>
              <li><strong>Usage Data:</strong> How you interact with our website and services</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Connect you with property listings</li>
              <li>Send you relevant property recommendations</li>
              <li>Improve our website and user experience</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="privacy-section">
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information with:
            </p>
            <ul>
              <li>Property agents to facilitate property viewings and transactions</li>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="privacy-section">
            <h2>Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal 
              information. This includes encryption, secure servers, and regular security 
              assessments. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          {/* Your Rights */}
          <section className="privacy-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
           
          </section>

          {/* Cookies */}
          <section className="privacy-section">
            <h2>Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing 
              experience, analyze website traffic, and personalize content. You can control 
              cookie preferences through your browser settings.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="privacy-section">
            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible 
              for the privacy practices or content of these external sites. We encourage you 
              to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="privacy-section">
            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age. We do not 
              knowingly collect personal information from children under 13. If you believe 
              we have collected such information, please contact us immediately.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="privacy-section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of 
              any changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          {/* Contact Us */}
          <section className="privacy-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or how we handle your data, 
              please contact us:
            </p>
            <div className="contact-info">
              <p>📧 Email: aluiyiola40@gail.com</p>
              <p>📞 Phone: 07039155324</p>
              <p>📍 Address: Nigeria</p>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer/>
</>
  );
};

export default PrivacyPolicy;