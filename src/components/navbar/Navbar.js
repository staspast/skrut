import React from 'react';
import { Navbar, NavItem, Nav } from  'react-bootstrap';

const Header = () =>
    <Navbar >
        {/*fixedTop fluid collapseOnSelect*/}
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">У діда Віктора</a>
            </Navbar.Brand>

            <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="/contact">Contact</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
            </Nav>
            
            <Nav pullRight>
                <NavItem eventKey={1} href="tel:+38 096 355 28 25">+38 096 355 28 25</NavItem>
            </Nav>
        </Navbar.Collapse>

    </Navbar>;

export default Header;