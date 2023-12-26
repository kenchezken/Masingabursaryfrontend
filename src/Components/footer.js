import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Masinga Constituency</h3>
        <p id="contact" >Contacts : 0724676585 
        </p>
        <p id="courtesyof">Courtesy of Hon. Joshua Mbithi Mwalyo</p>

        <ul className="socials">
          <li><a href="https://web.facebook.com/profile.php?id=100090714716151&sk=photos"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
        </ul>
      {/* <p id="copyright"> Copyright 2023 Kitui Central Constituency
      </p> */}
      </div>
      <div className="footer-bottom">
      <p>Copyright &copy; 2023 <a href="#">Masinga Constituency</a></p>
      </div>
             
    </footer>
  );
};

export default Footer;
