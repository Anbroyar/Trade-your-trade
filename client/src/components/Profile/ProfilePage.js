import React from 'react';
import { Container, Row, Col, Card, CardText, CardBody, CardTitle} from 'reactstrap';
import AddSkill from './AddSkill.js';

export default class Profile extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" md="9">
                        <Card>
                            <CardBody>
                                <CardTitle>My Profile</CardTitle>
                                <CardText>Photo URL: {this.props.userPhoto}</CardText>
                                <CardText>Name: {this.props.firstname} {this.props.lastname}</CardText>
                                <CardText>E-mail: {this.props.email}</CardText>
                            </CardBody>  
                        </Card>
                    </Col>
                </Row>
                <AddSkill />
                <AddSkill />
                <AddSkill />
            </Container>
        )
    }
}