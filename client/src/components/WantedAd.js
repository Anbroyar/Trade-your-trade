//Reusable help wanted ad, seen on the Help Wanted and Landing pages
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const WantedAd = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.userPhoto} alt="User Image" />
        <CardBody>
          <CardTitle>{props.userName}</CardTitle>
          <CardSubtitle>Searching for: {props.numberOfHours} hours of {props.jobType}.</CardSubtitle>
          <CardText>Can Provide: {props.userSkills}</CardText>
          <Button>Create Trade Offer</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default WantedAd;