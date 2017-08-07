import React, {Component} from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, OverlayTrigger} from  'react-bootstrap';
import PopoverPhone from './popover/Popover';
import {FormattedMessage} from 'react-intl'

class NavigationBar extends Component {

    handleSelect = (eventKey) => {
        let locale
        switch (eventKey){
          case 7:
            locale = 'ua'
            break
          case 8:
            locale = 'en'
            break
          case 9:
            locale = 'pl'
            break
        }
        this.props.onLanguageChange(locale)
    }

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
                        <Nav pullRight onSelect={this.handleSelect}>
                            <NavItem eventKey={1} href="/about-us"><FormattedMessage id="navbar.aboutUs"/></NavItem>
                            <NavItem eventKey={2} href="/offers"><FormattedMessage id="navbar.offers"/></NavItem>
                            <NavItem eventKey={3} href="/gallery"><FormattedMessage id="navbar.gallery"/></NavItem>
                            <NavItem eventKey={4} href="/reviews"><FormattedMessage id="navbar.reviews"/></NavItem>
                            <NavItem eventKey={5} href="/contact"><FormattedMessage id="navbar.contact"/></NavItem>

                            <NavItem>|</NavItem>

                            <NavDropdown eventKey={6} title="Language" id="dropdown">
                                <MenuItem eventKey={7} >UKR</MenuItem>
                                <MenuItem eventKey={8} >ENG</MenuItem>
                                <MenuItem eventKey={9} >POL</MenuItem>
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
