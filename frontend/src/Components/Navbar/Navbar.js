import React from 'react';
import './navbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavbarDummy = () => {
  const user = true;
  const categories = ['Men', 'Women', 'Other', 'Mobiles']

  const EndComponents = () => (
    user ? (
      <Nav className='ms-auto'>
        <Nav.Link as={NavLink} className='navItem' to="/my/profile">
          Profile
        </Nav.Link>
        <Nav.Link as={NavLink} className='navItem' to="/my/cart">
          Cart
        </Nav.Link>
      </Nav>
    ) : (
      <Nav className='ms-auto'>
        <Nav.Link as={NavLink} className='navItem' to="/login">
          Login
        </Nav.Link>
        <Nav.Link as={NavLink} className='navItem' to="/register">
          Register
        </Nav.Link>
      </Nav>
    )
  );

  return (
    <Navbar expand="lg" className='fixed-top nabar'>
      <Navbar.Brand className='brand'>Shree Haven</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} className='navItem' to="/">
            Home
          </Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            { categories && categories.length !== 0 && 
            categories.map((category, index) =>
            (
                <NavDropdown.Item key={index} as={NavLink} to={`/products/${category}`}>
                  {category}
                </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Nav.Link as={NavLink} className='navItem' to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} className='navItem' to="/contact">
            Contact
          </Nav.Link>
        </Nav>
        <EndComponents />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarDummy;
