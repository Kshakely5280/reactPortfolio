import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://github.com/kshakely5280" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kyle-shakely-78528a70/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer-text">Kyleshakely@yahoo.com 2023</div>
    </footer>
  );
};

export default Footer;
