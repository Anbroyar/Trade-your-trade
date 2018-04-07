import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './HelpWanted.css';

class HelpWanted extends Component {

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {form: {}, skills: []};
	}

	componentDidMount() {
		axios.get('/skills')
			.then(res => this.setState({skills: res.data}))
			.catch(err => console.log('oh boi', err))
	}

	handleChange(event) {
		this.setState({
			form: {
				...this.state.form,
				[event.target.name]: event.target.value
			}
		})
	}

	handleSubmit() {
		axios.post('/jobs', this.state.form)
			.then(res => {
				this.setState({form: {}});
			})
			.catch(err => console.log('oh jeez', err))
	}

  render() {
    return (
      <div className="help-wanted">
        <h1 className="header-text text-center">Help Wanted</h1>
				<Form inline className="form-search-skills">
					<Label for="jobName" className="label-text">Title of your Job Posting</Label>
					<Input name="jobName" className="skill-input" 
						value={this.state.form.jobName || ""}
						onChange={this.handleChange}
					/>
	      </Form>
	      <Form inline className="form-search-skills">
	        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
	        	<Label for="totalHours" className="label-text">I'm looking for</Label>
						<Input name="totalHours" className="hours-input" placeholder="# hours" 
							value={this.state.form.totalHours || ''}
							onChange={this.handleChange}
						/>
	        	<Label for="jobType" className="label-text">hours of work with</Label>
						<Input type="select" name="jobType" className="skill-input" 
							value={this.state.form.jobType || ""}
							onChange={this.handleChange}
						>
	        		<option value="" disabled hidden>Select Skill</option>
							{this.state.skills.map(skill => 
								<option value={skill._id} key={skill._id}>
									{skill.name}
								</option>
							)}
	        	</Input>
						</FormGroup>
						<Button 
								onClick={this.handleSubmit} 
								className="create-ad"
							>
								Create Ad
							</Button>
	      </Form>
      </div>
    );
  }
}

export default HelpWanted;