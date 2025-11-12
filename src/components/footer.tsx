import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/services" className="footer-link">Services</Link></li>
            <li><Link to="/track" className="footer-link">Track Shipment</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-list">
            <li><Link to="/services" className="footer-link">Import/Export</Link></li>
            <li><Link to="/services" className="footer-link">Customs Clearance</Link></li>
            <li><Link to="/services" className="footer-link">Warehousing</Link></li>
            <li><Link to="/services" className="footer-link">Door-to-Door Delivery</Link></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h3 className="footer-title">Support</h3>
          <ul className="footer-list">
            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            <li><a href="#" className="footer-link">Help Center</a></li>
            <li><a href="#" className="footer-link">Track Order</a></li>
            <li><a href="#" className="footer-link">FAQ</a></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Facebook">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="social-img"
              />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter"
                className="social-img"
              />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
                alt="LinkedIn"
                className="social-img"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Red Crane Trading Co. All rights reserved.
          </p>
          <div className="footer-social-links">
            <a href="#" className="social-link">Privacy</a>
            <a href="#" className="social-link">Terms</a>
            <a href="#" className="social-link">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;