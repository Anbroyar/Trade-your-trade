import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import AddSkill from './AddSkill.js';
import ApiContext from '../ApiContext';


const btnStyle = {
    background: "#e56",
    float: "right"
}

// export default withUser(Profile); add this to bottom if not using global state

export default class Profile extends React.Component {

    state = {
        form: {}
    }

    handleChange = event => this.setState({
       form: {
           ...this.state.form,
           [event.target.name]: event.target.value,
       },
        errors: null
    })

    loadUser = () => {
        // axios.get('usersomething')
        //     .then(res=> {
        //         this.setState({form: res.data})
        //     })
    }

    syncGlobalState = (globalState) => {
        this.syncUserFromGlobalState(globalState.user)
        this.updateUser = globalState.updateUser;
        return false;
    }

    syncUserFromGlobalState = (user) => {
        // if user from global state changes. we need to sync it with forms local state.
        if(user && user !== this.state.globalUser){
            this.setState(state => ({
                globalUser: user,
                form: user
            }))
        }
    }
    
    

    render() {
        return (
            <Container>
                <ApiContext.Consumer>
                    {this.syncGlobalState}
                </ApiContext.Consumer>
                <Row>
                    <Col xs="12" md={{size: 10, offset: 1}}>
                        <Card>
                            <CardBody>
                                <CardTitle>My Profile</CardTitle>
                                <Form>
                                    <FormGroup>
                                        <Label for='userphoto'>Photo URL: </Label>
                                        <Input 
                                            name='userphoto' 
                                            onChange={this.handleChange}
                                            value={this.state.form.userphoto || ''}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='firstname'>First Name: </Label>
                                        <Input 
                                            name='firstname'
                                            onChange={this.handleChange}
                                            value={this.state.form.firstname || ''}
                                        />     
                                    </FormGroup>
                                    <FormGroup>    
                                        <Label for='lastname'>Last Name: </Label>
                                        <Input type='text' 
                                        name='lastname'
                                        onChange={this.handleChange}
                                        value={this.state.form.lastname || ''}
                                         />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='email'>E-mail: </Label>
                                        <Input
                                        name='email'
                                        onChange={this.handleChange}
                                        value={this.state.form.email || ''}
                                         />
                                    </FormGroup>
                                </Form>
                            </CardBody>  
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xs="12" md={{size: 10, offset: 1}}>
                        <div>
                            <Card>
                                <CardBody>
                                    <CardTitle>My Skills</CardTitle>

                                    <AddSkill />
                                    <AddSkill />
                                    <AddSkill />
                                </CardBody>  
                            </Card>
                        </div>
                        <div className="my-2">
                            <Button style={btnStyle}>Update</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

