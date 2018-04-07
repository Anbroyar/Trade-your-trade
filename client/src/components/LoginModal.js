/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import axios from 'axios';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { update } from '../utils/withUser';
import "./Navbar";

const btnStyle = {
    background: "#e56"
}

class AbstractUserModalForm extends React.Component {

  toggleText = null
  headerText = null

  state = {
      modal: false,
      username: '',
      password: '',
      errors: null
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value,
    errors: null
  })

  submit = event => axios({
      url: this.url, 
      method: 'post',
      data: {
        username: this.state.username,
        password: this.state.password
      }
  })
  .then(this.toggle)
  .catch((errorResponse) => {
    this.setState({
      errors: errorResponse.response.data
    })
  })

  toggle = (result) => {
    this.setState({
        modal: !this.state.modal
    });
    update(result.data);
  }
  

  render() {
    return (
      <div>
          <span className="navbar-text" onClick={this.toggle}>
              {this.props.buttonLabel}
              {this.toggleText}
          </span>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>
                  {this.headerText}
                  <br/>
                  {this.state.errors && JSON.stringify(this.state.errors)}
              </ModalHeader>
              <ModalBody>
                  <div className="form-group">
                      <Label for="username">Username</Label>
                      <Input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                      <Label for="password">Password</Label>
                      <Input type="password" name="password" placeholder="Password" onChange={this.handleChange} />          
                  </div>
              </ModalBody>
              <ModalFooter>
                  <Button style={btnStyle} onClick={this.submit}>
                      Submit
                  </Button>
              </ModalFooter>
          </Modal>
      </div>
      );
  }
}

export class LoginModal extends AbstractUserModalForm {
  url = '/api/auth'
  headerText = 'Sign In'
  toggleText = 'Login'
}

export class RegisterModal extends AbstractUserModalForm {
  url = '/api/users'
  headerText = 'Register'
  toggleText = 'Register'
}

// export class LogoutModal extends AbstractUserModalForm {
//   url = '/api/auth'
//   headerText = 'Sign Out'
//   toggleText = 'Logout'
// }

export default LoginModal;