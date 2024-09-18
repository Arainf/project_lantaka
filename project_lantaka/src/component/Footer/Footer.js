import React from 'react';
import { Container } from 'reactstrap';
import { FaGithub, FaFacebookF } from 'react-icons/fa';
import './footer.css';

export const Footer = () => {
  return (
    <Container>
      <footer className="footer">
        <div className="footer-section contact-info">
          <p><strong>Developers:</strong></p>
          <ul className="footer-links">
            <div>
              <li><FaGithub className="footer-icon" /><a href="https://github.com/Arainf" target="_blank" rel="noopener noreferrer">Adrian Rainier Fabian (GitHub)</a></li>
              <li><FaGithub className="footer-icon" /><a href="https://github.com/nathanielledae" target="_blank" rel="noopener noreferrer">Dae (Project Manager, GitHub)</a></li>
              <li><FaGithub className="footer-icon" /><a href="https://github.com/RaikoMSu" target="_blank" rel="noopener noreferrer">Kean (Database, GitHub)</a></li>
            </div>


            <li><FaGithub className="footer-icon" /><a href="https://github.com/JAY-AR-CHIONG" target="_blank" rel="noopener noreferrer">Josh (Database, GitHub)</a></li>
            <li><FaGithub className="footer-icon" /><a href="https://github.com/JAY-AR-CHIONG" target="_blank" rel="noopener noreferrer">kenneth (Database, GitHub)</a></li>
            <li><FaGithub className="footer-icon" /><a href="https://github.com/robotic911" target="_blank" rel="noopener noreferrer">Kenneth P. (Frontend, GitHub)</a></li>

          </ul>
        </div>

        <div className="footer-section social-media">
          <p><strong>Follow Us:</strong></p>
          <a href="https://www.facebook.com/ateneodezamboangauniversity" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebookF className="footer-icon" /> Facebook: Ateneo de Zamboanga University
          </a>
        </div>

        <div className="footer-section copyright">
          <p>© 2024 Lantaka Room Reservation System. All Rights Reserved.</p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
