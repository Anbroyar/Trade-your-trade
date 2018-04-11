/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { update } from '../utils/withUser';
import "./Navbar";
import ApiContext from './ApiContext';

// const btnStyle = {
//     background: "#e56"
// }

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

  handleSubmit = (apiSubmit) => apiSubmit({
    username: this.state.username,
    password: this.state.password
  })
        .then(this.toggle)
        .catch((errorResponse) => {
            debugger;
            console.log(errorResponse)
            this.setState({
                errors: errorResponse.response.data
            })
        })

  toggle = (result) => {
    this.setState({
        modal: !this.state.modal
    });

    if(result && result.data)
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
                    <ApiContext.Consumer>
                        {/* Grabs the proper api function to submit user data for login/register */}
                        {(globalState) =>  {
                                const submitFn = globalState[this.globalFunctionName];
                                return (
                                    <Button
                                        color="primary" 
                                        onClick={() =>this.handleSubmit(submitFn)}>
                                        Submit
                                    </Button>
                                )
                        }}
                    </ApiContext.Consumer>
              </ModalFooter>
          </Modal>
      </div>
    );
  }
}

export class LoginModal extends AbstractUserModalForm {
  globalFunctionName = "loginAndSetUser"
  headerText = 'Sign In'
  toggleText = 'Login'
}

export class RegisterModal extends AbstractUserModalForm {
  globalFunctionName = 'registerAndSetUser'
  headerText = 'Register'
  toggleText = 'Register'
}

// export class LogoutModal extends AbstractUserModalForm {
//   url = '/api/auth'
//   headerText = 'Sign Out'
//   toggleText = 'Logout'
// }

export default LoginModal;