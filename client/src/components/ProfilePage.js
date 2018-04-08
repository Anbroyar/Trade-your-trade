import React from 'react';
import { Container, Row, Col, Card, CardText, CardBody } from 'reactstrap';
import ApiContext from './ApiContext';

export default class Profile extends React.Component {

    renderConsumer = globalState => {
        const {user} = globalState;
        return (
            <Fragment>
                <Col xs="12" md="3">
                    <img src={user.userPhoto}/>
                </Col>
                <Col xs="12" md="9">
                    <Card>
                        <CardBody>
                            <CardTitle>My Profile</CardTitle>
                            <CardText>Name: {user.firstname} {user.lastname}</CardText>
                            <CardText>E-mail: {user.email}</CardText>
                            <CardText>Phone: {user.phonenumber}</CardText>
                            <CardText>ZIP Code: {user.zipcode}</CardText>
                            <CardText>Location:</CardText>
                        </CardBody>  
                    </Card>
                </Col>
            </Fragment>      
        )
    }

    render() {
        return (
            <Container>
                <Row>
                    <ApiContext.Consumer>
                        {this.renderConsumer}
                    </ApiContext.Consumer>
                </Row>
            </Container>
        )
    }
}