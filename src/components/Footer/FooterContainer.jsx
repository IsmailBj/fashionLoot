import React from 'react';
import './Footer.css';
import Fb from 'ionicons/dist/svg/logo-facebook.svg';
import Insta from 'ionicons/dist/svg/logo-instagram.svg';
import Twitter from 'ionicons/dist/svg/logo-twitter.svg';
import Youtube from 'ionicons/dist/svg/logo-youtube.svg';

const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="#" aria-label="Instagram">
            <img src={Insta} alt="Instagram icon" className="icon-img" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src={Youtube} alt="YouTube icon" className="icon-img" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={Twitter} alt="Twitter icon" className="icon-img" />
          </a>
          <a href="#" aria-label="Facebook">
            <img src={Fb} alt="Facebook icon" className="icon-img" />
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Home</a></li>
          <li className="list-inline-item"><a href="#">Services</a></li>
          <li className="list-inline-item"><a href="#">About</a></li>
          <li className="list-inline-item"><a href="#">Terms</a></li>
          <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
        </ul>
        <p className="copyright">BOX LOOT © 2025</p>
      </footer>
    </div>
  );
};

export default Footer;
