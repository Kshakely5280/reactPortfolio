import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://github.com/kshakely5280">
          <FaGithub />
        </a>
      </div>
      <div>GoBabyGo 2023</div>
    </footer>
  );
};

export default Footer;
