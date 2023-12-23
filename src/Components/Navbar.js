import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import firstImage from '../images/pic1.jpg';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import a CSS file for custom styles

const NavigationBar = () => {
 
  return (
    <>
    <Navbar className="navbar-sticky" bg="light" data-bs-theme="light" style={{
      marginLeft: '0px'
     
    }}  >
      <Container>
        <Navbar.Brand href="#home">MASINGA CONSTITUENCY</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
          style={{
            marginLeft: '40px'
          }}
          >
            <NavLink to="/Home" className="nav-link">
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/BursaryApplication" className="nav-link">
              Bursary Application
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/About" className="nav-link">
              About
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/Contactus" className="nav-link">
              Contact Us
            </NavLink>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <NavLink to="/Studentlogin" style={{ textDecoration: 'none', color: 'black' }}
            >
              <FontAwesomeIcon icon={faUser} /> Student Login
            </NavLink>
          </Nav.Link>
          <Nav.Link>

            <NavLink to="/Adminlogin" style={{ textDecoration: 'none', color: 'black' }}
            >
              <FontAwesomeIcon icon={faUser} /> Admin Login
            </NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>  
    </>
    
  
  );
};
export default NavigationBar
