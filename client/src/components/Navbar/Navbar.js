import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';
 import "./Navbar.css";

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  homeClicked = () => {
    this.props.history.push("/")
  }

  render() {
    return (
      <div className="navbar-main">
        <Navbar color="faded" light expand="md">
          <NavbarBrand className="navbar-title navbar-text" onClick={this.homeClicked}>Trade Your Trade</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink id="navbar-text" href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navbar-text" href="/helpwanted">Help Wanted</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navbar-text" href="">Search</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(MyNavbar);