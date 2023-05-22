import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://github.com/your-github-profile-url" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/your-linkedin-profile-url" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/your-facebook-profile-url" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
      <div className="footer-text">GoBabyGo 2023</div>
    </footer>
  );
};

export default Footer;
