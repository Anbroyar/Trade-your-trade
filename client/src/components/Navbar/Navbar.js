import axios from 'axios';
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';
 import "./Navbar.css";
 import LoginModal, {RegisterModal} from '../LoginModal'
 import { withUser, update } from '../../utils/withUser';

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

  handleLogout = event => {
    axios({
      url: '/api/auth',
      method: 'delete',
    })
    .then(() => update(null));
  }

  renderPresence() {
    const { user } = this.props;

    if (user) {
      return (<Fragment>
        <NavItem className="navbar-text">
          <span className="welcome-text">Welcome, {user.username}</span>
        </NavItem>
        <NavItem>
          <Button
            color="danger"
            onClick={this.handleLogout}
          >
            Log Out
          </Button>
        </NavItem>
      </Fragment>);
    } else {
      return (<Fragment>
        <NavItem className="mr-1">
          <LoginModal />
        </NavItem>
        <NavItem>
          <RegisterModal />
        </NavItem>
      </Fragment>);
    }
  }


  render() {
    return (
      <div className="navbar-main">
        <Navbar color="faded" light expand="md">
          <NavbarBrand className="navbar-title navbar-text" onClick={this.homeClicked}>Trade Your Trade</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.renderPresence()}
              <NavItem>
                <NavLink className="navbar-text" href="/helpwanted">
                  <Button color="danger">
                    Help Wanted
                  </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navbar-text" href="/SearchPage">
                  <Button color="danger">
                    Search
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(withUser(MyNavbar));