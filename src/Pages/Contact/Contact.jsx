import React, { useState } from 'react';
import './Contact.css';
import Footer from '../../Components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
   <>
    <div className="contact-container">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-info-section">
            <div className="contact-info-card">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
              <p className="contact-small">Mon-Fri, 9am-6pm</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p className="contact-small">aluiyiola40@gmail.com</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">📍</div>
              <h3>Office</h3>
              <p>123 Luxury Lane</p>
              <p className="contact-small">Beverly Hills, CA 90210</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="contact-form-card">
              <h2>Send us a message</h2>
              <p className="contact-subtitle">
                Have questions? We're here to help. Fill out the form and we'll get back to you within 24 hours.
              </p>

              {submitted && (
                <div className="contact-success">
                  ✓ Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Property inquiry, support, etc."
                  />
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="contact-map-section">
          <h2>Visit Our Office</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.82104592135!2d-118.74133704556073!3d34.020618270348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LuxHomes Office Location"
            ></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="contact-faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>❓ How do I list my property?</h3>
              <p>Sign up as an agent and click on "Add Property" in your dashboard to list your property.</p>
            </div>
            <div className="faq-item">
              <h3>❓ Is there a fee to browse properties?</h3>
              <p>No, browsing properties is completely free for all users.</p>
            </div>
            <div className="faq-item">
              <h3>❓ How can I schedule a viewing?</h3>
              <p>Contact the property agent directly through the contact information provided on the listing.</p>
            </div>
            {/* <div className="faq-item">
              <h3>❓ What if I forgot my password?</h3>
              <p>Click on "Forgot Password" on the login page to reset your password.</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default Contact;