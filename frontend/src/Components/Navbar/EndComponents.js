import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { useContext } from 'react';
import UserContext from '../../contexts/userContext';


const EndComponents = ({ user, closeNavbar }) => {
    const { user: userName } = useContext(UserContext)
    return (
        <>
            {(user && user.type )? (
                <Nav className='ms-auto'>
                    <Nav.Link as={NavLink} className='navItem' to="/my/profile" onClick={closeNavbar}>
                        {userName.username}
                    </Nav.Link>
                    {
                        user.type === 'customer' && (
                            <Nav.Link as={NavLink} className='navItem' to="/my/cart" onClick={closeNavbar}>
                                Cart
                            </Nav.Link>
                        )
                    }
                </Nav>
            )
                : (
                    <Nav className='ms-auto'>
                        <Nav.Link as={NavLink} className='navItem' to="/login" onClick={closeNavbar}>
                            Login
                        </Nav.Link>
                        <Nav.Link as={NavLink} className='navItem' to="/register" onClick={closeNavbar}>
                            Register
                        </Nav.Link>
                    </Nav>
                )
            }
        </>
    )
}

export default EndComponents