import React from 'react';
import './TermsOfService.css';
import Footer from '../../Components/Footer';

const TermsOfService = () => {
  return (
  <>
    <div className="terms-container">
      {/* Hero Section */}
      <div className="terms-hero">
        <div className="terms-hero-overlay"></div>
        <div className="terms-hero-content">
          <h1>Terms of Service</h1>
          <p>Please read these terms carefully before using our services</p>
        </div>
      </div>

      <div className="terms-content">
        <div className="terms-card">
          <p className="terms-last-updated">Last Updated: May 29th, 2026</p>

          {/* Agreement to Terms */}
          <section className="terms-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using LuxHomes, you agree to be bound by these Terms of Service 
              and our Privacy Policy. If you disagree with any part of these terms, you may 
              not access our services.
            </p>
          </section>

          {/* Eligibility */}
          <section className="terms-section">
            <h2>2. Eligibility</h2>
            <p>
              You must be at least 18 years old to use our services. By using LuxHomes, 
              you represent and warrant that you meet this eligibility requirement.
            </p>
          </section>

          {/* User Accounts */}
          <section className="terms-section">
            <h2>3. User Accounts</h2>
            <p>When you create an account with us, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your password</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          {/* Property Listings */}
          <section className="terms-section">
            <h2>4. Property Listings</h2>
            <p>
              Agents and property owners are responsible for the accuracy of their listings. 
              LuxHomes does not verify the accuracy of property information and is not liable 
              for any discrepancies or misrepresentations.
            </p>
            <p className="terms-highlight">
              Important: We recommend verifying all property details directly with the agent 
              before making any commitments.
            </p>
          </section>

          {/* User Conduct */}
          <section className="terms-section">
            <h2>5. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Post false, inaccurate, or misleading information</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Use our platform for any illegal activities</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Scrape, copy, or reproduce our content without permission</li>
            </ul>
          </section>

          {/* Payments and Transactions */}
          <section className="terms-section">
            <h2>6. Payments and Transactions</h2>
            <p>
              LuxHomes facilitates connections between buyers and sellers but is not a party 
              to any real estate transaction. All financial arrangements are solely between 
              the involved parties. We are not responsible for any disputes arising from 
              property transactions.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="terms-section">
            <h2>7. Intellectual Property</h2>
            <p>
              All content on LuxHomes, including logos, designs, text, graphics, and software, 
              is the property of LuxHomes and protected by copyright and intellectual property laws. 
              You may not reproduce, distribute, or create derivative works without our express permission.
            </p>
          </section>

          {/* Termination */}
          <section className="terms-section">
            <h2>8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at our sole discretion, 
              without notice, for conduct that violates these terms or is harmful to other users 
              or our platform.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section className="terms-section">
            <h2>9. Disclaimer of Warranties</h2>
            <p>
              LuxHomes is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties 
              regarding the accuracy, reliability, or availability of our services. Your use of 
              the platform is at your own risk.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="terms-section">
            <h2>10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, LuxHomes shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>
          </section>

          {/* Governing Law */}
          <section className="terms-section">
            <h2>11. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the State 
              of California, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="terms-section">
            <h2>12. Changes to Terms</h2>
            <p>
              We may modify these terms at any time. We will notify you of significant changes by 
              posting the new terms on this page and updating the "Last Updated" date. Your continued 
              use of the platform constitutes acceptance of the modified terms.
            </p>
          </section>

          {/* Contact Us */}
          {/* <section className="terms-section">
            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="contact-info">
              <p>📧 Email: legal@luxhomes.com</p>
              <p>📞 Phone: (555) 123-4567</p>
              <p>📍 Address: 123 Luxury Lane, Beverly Hills, CA 90210</p>
            </div>
          </section> */}
        </div>
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default TermsOfService;