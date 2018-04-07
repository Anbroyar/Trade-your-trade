import React from 'react';
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import AddSkill from './AddSkill.js';
import { withUser, update } from '../../utils/withUser';

const btnStyle = {
    background: "#e56"
}

const { _id, user } = this.props;

class Profile extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" md={{size: 10, offset: 1}}>
                        <Card>
                            <CardBody>
                                <CardTitle>My Profile</CardTitle>
                                <Form>
                                    <FormGroup>
                                        <Label for='userphoto'>Photo URL: </Label>
                                        <Input type='url' name='userphoto' placeholder='this users photourl (this.props)' />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='firstname'>First Name: </Label>
                                        <Input type='text' name='firstname' placeholder='this users firstname (this.props)' />
                                    </FormGroup>
                                    <FormGroup>    
                                        <Label for='lastname'>Last Name: </Label>
                                        <Input type='text' name='lastname' placeholder='this users lastname (this.props)' />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='email'>E-mail: </Label>
                                        <Input type='text' name='email' placeholder='this users email (this.props)' />    
                                    </FormGroup>
                                </Form>
                            </CardBody>  
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xs="12" md={{size: 10, offset: 1}}>
                        <Card>
                            <CardBody>
                                <CardTitle>My Skills</CardTitle>

                                <AddSkill />
                                <AddSkill />
                                <AddSkill />
                            </CardBody>  
                        </Card>
                    </Col>
                </Row>                    
                <Button style={btnStyle}>Update</Button>{' '}

            </Container>
        )
    }
}

export default withUser(Profile);