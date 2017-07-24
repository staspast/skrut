import React from 'react';
import { Navbar, NavItem, Nav } from  'react-bootstrap';

const Header = () =>
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">У діда Віктора</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem eventKey={1} href="/contact">Contact</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
        </Nav>
    </Navbar>;

export default Header;