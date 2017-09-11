import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, OverlayTrigger } from  'react-bootstrap';
import PopoverPhone from './popover/Popover';
import { FormattedMessage } from 'react-intl'

class NavigationBar extends Component {

    handleSelect = (eventKey) => {
        let locale;

        switch (eventKey) {
            case 1:
                locale = 'ua';
                break;
            case 2:
                locale = 'en';
                break;
            case 3:
                locale = 'pl';
                break;
        }

        this.props.onLanguageChange(locale);
    };

    render() {
        return (
            <div className="navbar__component">
                <Navbar inverse fixedTop>

                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/"><FormattedMessage id="title"/></a>
                        </Navbar.Brand>

                        <Navbar.Toggle />
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem href="/about-us"><FormattedMessage id="navbar.aboutUs"/></NavItem>
                            <NavItem href="/offers"><FormattedMessage id="navbar.offers"/></NavItem>
                            <NavItem href="/gallery"><FormattedMessage id="navbar.gallery"/></NavItem>
                            <NavItem href="/reviews"><FormattedMessage id="navbar.reviews"/></NavItem>
                            <NavItem href="/contact"><FormattedMessage id="navbar.contact"/></NavItem>

                            <NavItem>|</NavItem>

                            <NavDropdown onSelect={this.handleSelect} title="Language" id="dropdown">
                                <MenuItem eventKey={1}>UKR</MenuItem>
                                <MenuItem eventKey={2}>ENG</MenuItem>
                                <MenuItem eventKey={3}>POL</MenuItem>
                                {/*<MenuItem eventKey={9}>RUS</MenuItem>*/}
                            </NavDropdown>

                            <OverlayTrigger
                                rootClose
                                trigger="click"
                                placement="bottom"
                                overlay={ PopoverPhone }
                            >
                                <NavItem eventKey={7}>
                                    <img src={require('../../images/phone-call.svg')} alt=""/>
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
