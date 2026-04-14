import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-box">
          <h2>Shree Finance Web</h2>
          <p>
            Manage customers, loans, and payments easily with a simple finance system.
          </p>
        </div>

        

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact</h3>
          <p>📍 Akkalkot, Maharashtra</p>
          <p>📞 +91 9823585144</p>
          <p>📧 dasharathmuli@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Shree Finance Web | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;