import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-inner">

        {/* Column 1 - Brand */}
        <div>
          <p className="footer-brand-title">CS — Ticket System</p>
          <p className="footer-brand-desc">
            Streamlining customer support, one ticket at a time. Track, manage, and resolve
            customer issues efficiently with our simple and powerful ticket management system.
          </p>
        </div>

        {/* Column 2 - Company */}
        <div>
          <p className="footer-col-title">Company</p>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact Sales</a></li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div>
          <p className="footer-col-title">Services</p>
          <ul className="footer-links">
            <li><a href="#">Products &amp; Services</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Download Apps</a></li>
          </ul>
        </div>

        {/* Column 4 - Information */}
        <div>
          <p className="footer-col-title">Information</p>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Join Us</a></li>
          </ul>
        </div>

        {/* Column 5 - Social Links */}
        <div>
          <p className="footer-col-title">Social Links</p>
          <ul className="footer-social-links">
            <li>
              <span className="footer-social-icon bg-grey"><FontAwesomeIcon icon={faXTwitter} /></span>
              <a href="#">@CS — Ticket System</a>
            </li>
            <li>
              <span className="footer-social-icon bg-grey"><FontAwesomeIcon icon={faLinkedin} /></span>
              <a href="#">@CS — Ticket System</a>
            </li>
            <li>
              <span className="footer-social-icon bg-grey"><FontAwesomeIcon icon={faFacebook} /></span>
              <a href="#">@CS — Ticket System</a>
            </li>
            <li>
              <span className="footer-social-icon bg-grey"><FontAwesomeIcon icon={faEnvelope} /></span>
              <a href="mailto:support@cst.com">support@cst.com</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
