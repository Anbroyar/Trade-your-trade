import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './HelpWanted.css';

class HelpWanted extends Component {
  render() {
    return (
      <div className="help-wanted">
        <h1 className="header-text text-center">Help Wanted</h1>
        <Form inline className="form-search-radius">
        	<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
		        <Label for="radiusSelect" className="label-text">Search for jobs within</Label>
		        	<Input type="select" name="select" id="radiusSelect">
		            <option>10</option>
		            <option>25</option>
		            <option>50</option>
		            <option>100</option>
		          </Input>
		        <Label for="zipSelect" className="label-text">miles of</Label>
		        <Input name="zip" id="zipSelect" className="zip-input" placeholder="Enter Zipcode"/>
	        </FormGroup>
	      </Form>
	      <Form inline className="form-search-skills">
	        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
	        	<Label for="hoursSelect" className="label-text">I'm looking for</Label>
	        	<Input name="hours" id="hoursSelect" className="hours-input" placeholder="# hours"/>
	        	<Label for="skillSelect" className="label-text">hours of work with</Label>
	        	<Input type="select" name="skill" id="skillSelect" className="skill-input">
	        		<option value="" selected disabled hidden>Select Skill</option>
	        		<option>Carpentry</option>
	        		<option>Electrical</option>
	        	</Input>
	        	<Button className="create-ad">Create Ad</Button>
	        </FormGroup>
	      </Form>
      </div>
    );
  }
}

export default HelpWanted;