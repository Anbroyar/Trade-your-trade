import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="skillSearch">Search For A Skill</Label>
          <Input type="text" name="skillSearch" id="skillSearch" placeholder="with a placeholder" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}