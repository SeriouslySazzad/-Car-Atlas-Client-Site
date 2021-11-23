import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/" className="">Car Atlas</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={Link} className="nav-menu text-white" to="/explore">Explore</Nav.Link>

                        {
                            user.email &&
                            <Nav.Link as={Link} className="nav-menu text-white" to="/dashboard">Dashboard</Nav.Link>
                        }

                        <Nav.Link as={HashLink} className="nav-menu text-white" to="/home#about">About</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-menu text-white" to="/home#review">Review</Nav.Link>
                        {/* <Nav.Link as={Link} className="nav-menu text-white" to="/dashboard">Dashboard</Nav.Link> */}
                        {
                            user?.email ?
                                <button onClick={logout} className="btn-danger">Logout <i className="fas fa-sign-out-alt"></i></button>
                                :
                                <Nav.Link as={Link} className="nav-menu text-white" to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            <a className="nav-menu text-decoration-none ms-2" href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;