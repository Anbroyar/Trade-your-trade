import React, { Component } from 'react';
import {  Label, Input } from 'reactstrap';
// import './App.css';

class HelpWanted extends Component {
  render() {
    return (
      <div className="help-wanted">
        <h1>Help Wanted</h1>
        <Label for="exampleEmail">Input without validation</Label>
        <Input />
      </div>
    );
  }
}

export default HelpWanted;