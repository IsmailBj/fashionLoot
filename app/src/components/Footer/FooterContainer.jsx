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
          <a href="#"><img src={Insta} alt="" className="icon-img" /><i className="icon ion-social-instagram"></i></a>
          <a href="#"><img src={Youtube} alt="" className="icon-img" /><i className="icon ion-social-youtube"></i></a>
          <a href="#"><img src={Twitter} alt="" className="icon-img" /><i className="icon ion-social-twitter"></i></a>
          <a href="#"><img src={Fb} alt="" className="icon-img" /><i className="icon ion-social-facebook"></i></a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Home</a></li>
          <li className="list-inline-item"><a href="#">Services</a></li>
          <li className="list-inline-item"><a href="#">About</a></li>
          <li className="list-inline-item"><a href="#">Terms</a></li>
          <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
        </ul>
        <p className="copyright">BOX LOOT © 2023</p>
      </footer>
    </div>
  );
};

export default Footer;
