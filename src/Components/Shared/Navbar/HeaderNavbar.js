import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class HeaderNavbar extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">3D-Store  <i class="fas fa-gem"></i>
</NavbarBrand>
          <NavbarToggler onClick={()=> this.toggle()} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about" target="_blank">About&nbsp;<i class="fas fa-user"></i>
              </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/cart/"><i class="fas fa-cart-plus"></i>
              </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#">SignIn</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Pricing
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    VR 1
                  </DropdownItem>
                  <DropdownItem>
                    VR 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>      
    )
  }
}

export default HeaderNavbar;