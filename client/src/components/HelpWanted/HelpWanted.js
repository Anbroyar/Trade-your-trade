import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './HelpWanted.css';

class HelpWanted extends Component {
  render() {
    return (
      <div className="help-wanted">
        <h1 className="header-text text-center">Help Wanted</h1>
        <FormGroup row>
        	<Col sm={2}></Col>
	        <Col sm={2} className="column-one-text">Search for jobs within </Col>
	        <Col sm={2}>
	        	<Input type="select" name="select" id="exampleSelect">
	            <option>10</option>
	            <option>25</option>
	            <option>50</option>
	            <option>100</option>
	          </Input>
	        </Col>
	        <Col sm={1} className="column-two-text"> miles of </Col>
	        <Col sm={2}>
	        	<Input name="zip" className="zip-input" placeholder="Enter Zipcode"/>
	        </Col>
	      </FormGroup>
	      <FormGroup row>
	        <Col sm={2} className="column-one-text">I'm looking for </Col>
	        <Col sm={1}>
	        	<Input name="hours" className="hours-input" placeholder="# hours"/>
	        </Col>
	        <Col sm={2} className="column-two-text"> hours of help with </Col>
	        <Col sm={3}>
	        	<Input type="select" name="skill" className="skill-input" placeholder="Enter Zipcode">
	        		<option></option>
	        	</Input>
	        </Col>
	        <Col sm={1}> work. </Col>
	        <Col sm={2}>
	        	<Button>Create Ad</Button>
	        </Col>
	      </FormGroup>
      </div>
    );
  }
}

export default HelpWanted;