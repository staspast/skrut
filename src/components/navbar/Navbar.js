import React from 'react'
import PopoverPhone from '../popover/Popover'
import ImagePhoneCall from '../../images/phone-call.svg'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, OverlayTrigger } from  'react-bootstrap'
import { FormattedMessage } from 'react-intl'

const NavigationBar = () =>
  <Navbar fixedTop fluid inverse>

    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">
          <FormattedMessage
            id="title"
          />
        </a>
      </Navbar.Brand>

      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="/about-us"><FormattedMessage id="navbar.aboutUs"/></NavItem>
        <NavItem eventKey={2} href="/offers"><FormattedMessage id="navbar.offers"/></NavItem>
        <NavItem eventKey={3} href="/gallery"><FormattedMessage id="navbar.gallery"/></NavItem>
        <NavItem eventKey={4} href="/contact"><FormattedMessage id="navbar.contact"/></NavItem>

        <NavItem>|</NavItem>

        <NavDropdown eventKey={5} title="UKR">
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

export default NavigationBar
