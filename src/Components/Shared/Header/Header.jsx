/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-primary b">
                <Container>
                    <Navbar.Brand href="#home">Router</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link to='/' className='fs-6 fw-semibold text-secondary text-decoration-none'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/about' className='fs-6 fw-semibold text-secondary text-decoration-none'>About</Link></Nav.Link>
                            <Nav.Link ><Link to='/users' className='fs-6 fw-semibold text-secondary text-decoration-none'>Users</Link></Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='fs-6 fw-semibold'>
                                <NavDropdown.Item to="/action/1" className='fs-6 fw-semibold'>Action</NavDropdown.Item>
                                <NavDropdown.Item to="/action/2" className='fs-6 fw-semibold'>
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item to="/action/3" className='fs-6 fw-semibold'>Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item to="/action/4" className='fs-6 fw-semibold'>
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;