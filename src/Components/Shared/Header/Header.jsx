/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './Header.css'


const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-primary b">
                <Container>
                    <Navbar.Brand href="#home">Router</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className='fs-6 fw-semibold'>Home</Nav.Link>
                            <Nav.Link href="/about" className='fs-6 fw-semibold'>About</Nav.Link>
                            <Nav.Link href="/users" className='fs-6 fw-semibold'>Users</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='fs-6 fw-semibold'>
                                <NavDropdown.Item href="/action/1" className='fs-6 fw-semibold'>Action</NavDropdown.Item>
                                <NavDropdown.Item href="/action/2" className='fs-6 fw-semibold'>
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/action/3" className='fs-6 fw-semibold'>Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/action/4" className='fs-6 fw-semibold'>
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