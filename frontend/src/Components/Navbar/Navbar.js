import React, { useContext } from 'react';
import './navbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import EndComponents from './EndComponents';
import TypesCatesContext from '../../contexts/TypesCatesContext';


const NavbarDummy = () => {
  const { user } = useContext(UserContext)
  const { typesCates } = useContext(TypesCatesContext)

  const closeNavbar = () => {
    const navbarToggle = document.querySelector('.navbar-toggler');
    if (navbarToggle && window.innerWidth < 992) {
      navbarToggle.click();
    }
  }


  return (
    <Navbar expand="lg" className='fixed-top nabar'>
      <Navbar.Brand className='brand'>Shree Haven</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} className='navItem' to="/" onClick={closeNavbar}>
            Home
          </Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            { typesCates && typesCates.length !== 0 && 
            typesCates.map((category, index) =>
            (
                <NavDropdown.Item key={index} as={NavLink} to={`/products/${category.type}`} onClick={closeNavbar}>
                  {category.type}
                </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Nav.Link as={NavLink} className='navItem' to="/my/wishList_products" onClick={closeNavbar}>
            wishlist
          </Nav.Link>
          <Nav.Link as={NavLink} className='navItem' to="/contact" onClick={closeNavbar}>
            Contact
          </Nav.Link>
        </Nav>
        <EndComponents user={user} closeNavbar={closeNavbar}/>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarDummy;
