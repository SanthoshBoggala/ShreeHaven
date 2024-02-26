import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './navbar.css';


const EndComponents = ({ user }) => {
    return (
        <>
            {(user && user.type )? (
                <Nav className='ms-auto'>
                    <Nav.Link as={NavLink} className='navItem' to="/my/profile">
                        Profile
                    </Nav.Link>
                    {
                        user.type === 'customer' && (
                            <Nav.Link as={NavLink} className='navItem' to="/my/cart">
                                Cart
                            </Nav.Link>
                        )
                    }
                </Nav>
            )
                : (
                    <Nav className='ms-auto'>
                        <Nav.Link as={NavLink} className='navItem' to="/login">
                            Login
                        </Nav.Link>
                        <Nav.Link as={NavLink} className='navItem' to="/register">
                            Register
                        </Nav.Link>
                    </Nav>
                )
            }
        </>
    )
}

export default EndComponents