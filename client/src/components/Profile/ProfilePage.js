import React from 'react';
import { Media, Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import zipcodes from 'zipcodes';
import AddSkill from 'AddSkill.js';

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
                                <CardText>ZIP Code: {props.zipcode}</CardText>
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