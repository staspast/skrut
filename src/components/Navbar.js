import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, OverlayTrigger } from  'react-bootstrap';
import PopoverPhone from './Popover';
import ImagePhoneCall from '../images/phone-call.svg';

class NavigationBar extends Component {
    render() {
        return (
            <div className="navbar-component">
                <Navbar fluid inverse fixedTop>

                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">У діда Віктора</a>
                        </Navbar.Brand>

                        <Navbar.Toggle />
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="/about-us">About Us</NavItem>
                            <NavItem eventKey={2} href="/offers">Offers</NavItem>
                            <NavItem eventKey={3} href="/gallery">Gallery</NavItem>
                            <NavItem eventKey={4} href="/contact">Contact</NavItem>

                            <NavItem>|</NavItem>

                            <NavDropdown eventKey={5}  title="UKR" id="dropdown">
                                <MenuItem>ENG</MenuItem>
                                <MenuItem>POL</MenuItem>
                                <MenuItem>RUS</MenuItem>
                            </NavDropdown>

                            <OverlayTrigger
                                rootClose
                                trigger="click"
                                placement="bottom"
                                overlay={ PopoverPhone }
                            >
                                <NavItem eventKey={6}>
                                    <img src={ ImagePhoneCall } alt="" width="20"/>
                                </NavItem>
                            </OverlayTrigger>

                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;
