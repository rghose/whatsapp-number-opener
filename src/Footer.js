import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


export default class Footer extends Component {
    render() {
        return(
            <Navbar fixed="bottom" color="light" light expand="md">
              <NavbarBrand>Disclaimer</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
										 We do not collect your personal information. All information is stored on your device.
                  </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
