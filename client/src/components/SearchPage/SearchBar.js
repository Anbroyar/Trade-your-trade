import axios from "axios";
import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import ApiContext from '../ApiContext';

const btnStyle = {
    background: "#e56"
}

export default class Example extends React.Component {

  state = {
    users: [],
    skills: [],
    jobs: [],
    skillSelected: "",
    errors: null
  };

  componentWillMount() {
    axios.get('/skills')
      .then(res => this.setState({skills: res.data}))
      .catch(err => console.log('oh boi', err));
    axios.get('/jobs')
      .then(res => {
        this.setState({jobs: res.data});
        console.log("Jobs: ", this.state.jobs);
      })
      .catch(err => console.log('oh boi', err));
    // console.log("Jobs: ", this.state.jobs);
  }

  // <ApiContext.Consumer>
  //   {(globalState) => {
  //     {this.globalState.jobs.map(job => {
  //       <div>
  //       <Row >
  //         <Col sm={{ size: 12, offset: 1}}>
  //           {this.job.jobName}
  //         </Col>
  //       </Row>
  //       <Row >
  //         <Col sm={{ size: 12, offset: 1}}>
  //           {this.job.jobType}
  //         </Col>
  //       </Row>
  //       </div>
  //     })}
  //   }}
  // </ApiContext.Consumer>

  // <Container>
  //         {this.state.jobs.map(job => {
  //           <div>
  //             <Row >
  //               <Col sm={{ size: 12, offset: 1}}>
  //                 {this.job.jobName}
  //               </Col>
  //             </Row>
  //             <Row >
  //               <Col sm={{ size: 12, offset: 1}}>
  //                 {this.job.jobType}
  //               </Col>
  //             </Row>
  //           </div>
  //         })}
  //       </Container>

  // loadSkills = event => axios({
  //   url: "/api/skills",
  //   method: 'get'
  // })
  // .then(res =>
  //   this.setState({ skills: res.data })
  // )
  // .catch(errorResponse => {
  //   console.log(errorResponse);
  //   this.setState({ errors: errorResponse.response.data })
  // })

  // handleSkillChange = event => {
  //   const skillName = event.target.name;
  //   const skillValue = event.target.value;
  //   console.log(skillName + ": " + skillValue);
  //   this.setState({skillSelected: skillValue})
  // }

  // handleSubmit = event => {
  //   // const skillName = event.target.name;
  //   // const skillValue = event.target.value;
  //   // console.log(skillName + ": " + skillValue);
  //   axios({
  //     url: "/jobs/" + this.state.skillSelected, 
  //     method: 'get',
  //     data: {
  //       skill: this.state.skillSelected
  //     }
  //     })
  //     .then(res => 
  //       this.setState({ jobs: res.data }))
  //     .catch((errorResponse) => {
  //       this.setState({
  //         errors: errorResponse.response.data
  //       })
  //     })
  // }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="skillSearch">Search For A Job</Label>
            <Input type="select" onChange={this.handleSkillChange} name="skillSearch" id="skillSearch">
              <option value="" disabled hidden>
                Select a Skill you're looking for help with.
              </option>
              {this.state.skills.map(skill => 
                <option value={skill._id} key={skill._id}>
                  {skill.name}
                </option>
              )}
            </Input>
          </FormGroup>
          <Button style={btnStyle} onClick={this.handleSubmit}>Submit</Button>
        </Form>
        <Container>
          {this.state.jobs.map(job => 
            <Container className="job-container">
              <Row >
                <Col sm={{ size: 12, offset: 1}}>
                  {job.jobName}
                </Col>
              </Row>
              <Row >
                <Col sm={{ size: 12, offset: 1}}>
                  Estimated Cost: ${job.totalCost}
                </Col>
              </Row>
              <Row >
                <Col sm={{ size: 12, offset: 1}}>
                  Hours Required: {job.totalHours}
                </Col>
              </Row>
              <Row>
                <Col sm={{ size: 12, offset: 1}}>
                  <Button className="apply-button" style={btnStyle}>
                    Apply
                  </Button>
                </Col>
              </Row>
            </Container>
          )}
        </Container>
      </div>
    );
  }
}