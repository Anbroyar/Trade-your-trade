import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import AddSkill from './AddSkill.js';
import ApiContext from '../ApiContext';
import axios from "axios";


const btnStyle = {
    background: "#e56",
    float: "right"
}

const skillArray = [];

// export default withUser(Profile); add this to bottom if not using global state

export default class Profile extends React.Component {

    state = {
        form: {},
        skills: [],
        selectedSkills: []
    }

    handleChange = event => this.setState({
        form: {
           ...this.state.form,
           [event.target.name]: event.target.value,
        },
        errors: null
    })

    // handleSkillChange = event => {
    //     skillArray.push(event.target.value);
    //     this.setState({
    //         selectedSkills: skillArray
    //     });
    //     console.log(this.state.selectedSkills);
    // }

    // handleSubmit = (req, res) => {
    //     axios.put('/users', this.state.form)
    //     .then(res => {
    //         this.setState({form: {}});
    //     })
    //     .catch(err => console.log("Error: ", err))
    // }    

    componentDidMount() {
        axios.get('/skills')
        .then(res => this.setState({skills: res.data}))
        .catch(err => console.log('oh boi', err))
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
                                        <Label for='firstname' > First Name: </Label>
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

                                    <AddSkill onChange={this.handleSkillChange} skills={this.state.skills} skillNum={"skill1"} placeholderText={"My Best Skill"}/>
                                    <AddSkill onChange={this.handleSkillChange} skills={this.state.skills} skillNum={"skill2"} placeholderText={"My Second Best Skill"}/>
                                    <AddSkill onChange={this.handleSkillChange} skills={this.state.skills} skillNum={"skill3"} placeholderText={"My Third Best Skill"}/>
                                </CardBody>  
                            </Card>
                        </div>
                        <div className="my-2">
                            <Button onClick={this.handleSubmit} style={btnStyle}>Update</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}