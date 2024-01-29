import React from 'react'
import './navbar.css'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavbarDummy = () => {
  const user = true

  const EndConponents = ()=>( user ? (
    <Nav className='ms-auto'>
    <Nav.Link as={NavLink} to="/profile" >
            Profile
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cart">
            Cart
    </Nav.Link>
    </Nav>
  ) : (
    <Nav className='ms-auto'>
      <Nav.Link as={NavLink} to="/login" >
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="/register">
            Register
      </Nav.Link>
    </Nav>
  ))

  return (
    <Navbar expand="lg" className='fixed-top nabar'>
      <Navbar.Brand className=''>Shree Haven</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" >
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" >
            Contact
          </Nav.Link>
        </Nav>
        <EndConponents />   
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarDummy;
