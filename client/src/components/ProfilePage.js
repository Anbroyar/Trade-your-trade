import React from 'react';
import { Media, Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import zipcodes from 'zipcodes';

export default class Profile extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" md="3">
                        <img src={props.userPhoto}/>
                    </Col>
                    <Col xs="12" md="9">
                        <Card>
                            <CardBody>
                                <CardTitle>My Profile</CardTitle>
                                <CardText>Name: {props.firstname} {props.lastname}</CardText>
                                <CardText>E-mail: {props.email}</CardText>
                                <CardText>Phone: {props.phonenumber}</CardText>
                                <CardText>ZIP Code: {props.zipcode}</CardText>
                                <CardText>Location:</CardText>
                            </CardBody>  
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}