import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './HelpWanted.css';
import WantedAd from '../WantedAd/WantedAd';
import axios from 'axios';
import ApiContext from '../ApiContext';


const btnStyle = {
    background: "#e56"
}

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
						<Input type="number" name="totalHours" className="hours-input" placeholder="# hours" 
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
	        	<Label for="estimatedCost" className="label-text">Estimated Cost: $</Label>
	        	<Input type="number" name="totalCost" className="cost-input" placeholder="Estimated Cost in USD"
	        		value={this.state.form.totalCost || ""}
	        		onChange={this.handleChange}
	        	/>
						</FormGroup>
						<Button 
							style={btnStyle}
							onClick={this.handleSubmit} 
							className="create-ad"
						>
							Create Ad
						</Button>
	      </Form>
		<div className="row">
            <div className="col-md-4">
                <WantedAd />
            </div>
            <div className="col-md-4">
                <WantedAd />
            </div>
            <div className="col-md-4">
                <WantedAd />
            </div>
        </div>
      </div>
    );
  };
}

export default HelpWanted;