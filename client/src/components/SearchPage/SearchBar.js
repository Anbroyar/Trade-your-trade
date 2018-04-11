import axios from "axios";
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const btnStyle = {
    background: "#e56"
}

export default class Example extends React.Component {

  state = {
    skills: [],
    jobs: {},
    errors: null
  };

  componentDidMount() {
    this.loadSkills();
  }

  loadSkills = event => axios({
    url: "/skills",
    method: 'get'
  })
  .then(res =>
    this.setState({ skills: res.data })
  )
  .catch(errorResponse => {
    console.log(errorResponse);
    this.setState({ errors: errorResponse.response.data })
  })

  handleSubmit = event => axios({
    url: "/jobs", 
    method: 'get',
    data: {
      skill: event.target.value
    }
  })
  .then(res => 
    this.setState({ jobs: res.data }))
  .catch((errorResponse) => {
    this.setState({
      errors: errorResponse.response.data
    })
  })

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="skillSearch">Search For A Job</Label>
          <Input type="text" name="skillSearch" id="skillSearch" placeholder="with a placeholder" />
        </FormGroup>
        <Button style={btnStyle} onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}