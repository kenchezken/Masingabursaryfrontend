import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png'
import './Navbar.css'; // Import a CSS file for custom styles

const NavigationBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container"
        >
           <NavLink exact to="/" className="nav-logo">
      <img src={logo} alt="Masinga Constituency" />
    </NavLink>
          <NavLink exact to="/" className="nav-logo">
            <span style={{
              fontSize: '15px',
              fontWeight: 'bolder'
            }}>MASINGA CONSTITUENCY</span>
            {/* <i className="fas fa-code"></i> */}
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
              
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/BursaryApplication"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Bursary application
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/Contactus"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact us
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/Studentlogin"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faUser} /> Student Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Adminlogin"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                 <FontAwesomeIcon icon={faUser} /> Admin Login
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                 <FontAwesomeIcon icon={faHamburger} />
              </span>
            ) : (
              <span className="icon">
                <FontAwesomeIcon icon={faHamburger}/>
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
    
  
  );
};
export default NavigationBar
