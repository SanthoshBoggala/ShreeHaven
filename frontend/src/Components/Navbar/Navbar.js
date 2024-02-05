import React from 'react'
import './navbar.css'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavbarDummy = () => {
  const user = true

  const EndConponents = ()=>( user ? (
    <Nav className='ms-auto'>
    <Nav.Link as={NavLink} className='navItem' to="/profile" >
            Profile
          </Nav.Link>
          <Nav.Link as={NavLink} className='navItem' to="/cart">
            Cart
    </Nav.Link>
    </Nav>
  ) : (
    <Nav className='ms-auto'>
      <Nav.Link as={NavLink} className='navItem' to="/login" >
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} className='navItem' to="/register">
            Register
      </Nav.Link>
    </Nav>
  ))

  return (
    <Navbar expand="lg" className='fixed-top nabar'>
      <Navbar.Brand className='brand'>Shree Haven</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} className='navItem' to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} className='navItem' to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} className='navItem' to="/about" >
            About
          </Nav.Link>
          <Nav.Link as={NavLink} className='navItem' to="/contact" >
            Contact
          </Nav.Link>
        </Nav>
        <EndConponents />   
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarDummy;
