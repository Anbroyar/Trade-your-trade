//Reusable help wanted ad, seen on the Help Wanted and Landing pages
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./WantedAd.css";
import ApiContext from '../ApiContext';


const btnStyle = {
    background: "#e56"
}

class WantedAd extends Component {

  render() {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEX///8AAAD8/Pzx8fHr6+tlZWXe3t739/fMzMygoKDk5OQ5OTkoKCi3t7fV1dVNTU3AwMAxMTFvb2+tra0QEBCEhIQbGxtAQECPj4+VlZVVVVVeXl5FRUV9fX13d3fGxsa0JMo2AAAD1ElEQVRogc2b6WLqIBCFJfu+B43r+7/lNSbaVBM4JDP2nr+1/QQGmDlDd7stsqNNv75FUdeFf8H1rV0Q52L/B+hLaGWuFEKk3ybblThkVS56ed9Fdz1TilHFF8m3F3XUMfgS2WrFp2QV+Pxo/ziD7hWHNjPaLhfQdyU1LzpZRvcLzzn0WIkWosnY0JUGfRcXPNWjReKwoFVxNllzFnaIoJmOuffjbEElAzrA0CyXCzjlQnT0bBdlu/TsM8qWFjm7QdmCng2jBf2p/pds9RXGy85hNv16A5fYoIaefUDZOTl6V6PsCz0bub0fYijRMpTNcJf46MFGj9754AZnuEoigY6bPtbgMBcl+f7G2TE1Gk+ZGBbchtkHcjZ+hzK4IPBdwlAQwsFGj4aTBxbjyYMOF4ZbrNceYd942Eh10DDZbUi0cXmcHsBumdi7JX9rIjbDRV+K5vQ56ihHy2Z0lS8adMzobOoGzmqmzxm5k9XmRGtuUh5v7aWbAs3et1kON4bk+E3WUi18/oJ7b8+bySXzYg9y5pKIb6D7ZGxm5I+zlBkfDrF8fUMPVmLJ2jFJnwVPMR36KRt/uOeD+/2pNh6bfj3SpTt2x3p7PeHqlKWPGNu/tpKX1nX60xd7NAvFhWPRi2d0L5xer6SmIh67E/4Y9818v31i9cqOLnsJql8tg9PcZ94csLgmeBFgReHHITrT//u8YmSVbcufnPD08UfFTEI4n1Mci/X0YLEYeAvmRRuoXNk0ihQZsfy1mrMH/Kj9mqhX58PNpOz66MX/1tX4btVlpKIdhx5pP5kYlmiAaSyrNMvSCimMjeYd9k5BmWx2oPAykkGpVBCjTWYdb42ggnNY3EKEJdEVh500A4FvQGyw0W2kM8aGGyNGwg4Y6g02CJp0iwWNuer0m3sQkj93TGxk0iHncoWuejTTcgvE22Y41EbpdxnXciOWyHuJSSftgvtcoXZPWnWJG96KMpeuTKTOlqbSJet469FcOm9dbVpuky554cgbnsrVwbb49JVCUh1sC8YdkdQnW8SJ1mTKSCtovdTXKN9N0kv9mpAnT3xK3SuFH0SuUqVka4vpTZp1qF6CH2Oukvq9MOfR8j+z6atfnD1r5ZFJHWu8ca7eY1wF0SB18qD5R4qN0rRqOQde6dym6MI1dMTcdFKOnZajvfEopM1f4tCojWDXVGmjW69om1le5270nPI2WN87sL36muNP7idKTu3N2fzkxI+y+xco8W9Qnq91Rtmk870gPbilVH2FRu6vYZGxtUVt75bWXeseHxPRNEl8PFXtIUyLIDJrT/wDwn40DTOYriwAAAAASUVORK5CYII=" alt="User Image" />
          <CardBody>
            <CardTitle>{this.props.userName}</CardTitle>
            <CardSubtitle>Searching for: {this.props.numberOfHours} hours of {this.props.jobType}.</CardSubtitle>
            <CardText>Can Provide: {this.props.userSkills}
                      Located {this.props.distance} miles away
            </CardText>
            <Button style={btnStyle}>Create Trade Offer</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
}

export default WantedAd;