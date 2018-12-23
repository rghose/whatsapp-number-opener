import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


export default class Header extends Component {
    render() {
        return(
            <Navbar fixed="top" color="light" light expand="md">
              <NavbarBrand href="/">Whatsapp Number Opener</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="https://github.com/rghose">Author</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
