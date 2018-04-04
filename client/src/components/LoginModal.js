/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import axios from 'axios';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';

class LoginModal extends React.Component {
  state = {
      modal: false,
      username: '',
      password: ''
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  submit = event => axios({
      url: '/api/auth', 
      method: 'post',
      data: {
        username: this.state.username,
        password: this.state.password
      }
  })


  toggle = () => this.setState({
      modal: !this.state.modal
  })
  

  render() {
    return (
      <div>
          <Button color="danger" onClick={this.toggle}>
              {this.props.buttonLabel}
              LOGIN
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>
                  Sign In
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
                  <Button color="primary" onClick={this.submit}>
                      Login
                  </Button>
              </ModalFooter>
          </Modal>
      </div>
      );
  }
}

export default LoginModal;