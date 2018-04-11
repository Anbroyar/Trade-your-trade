import React from 'react';
import { Col, Row, Card, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from "axios";

const btnStyle = {
    background: "#e56"
}

export default class AddSkill extends React.Component{

    state = {
        skills: []
    }

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
    }
    
    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }

    componentDidMount() {
        axios.get('/skills')
            .then(res => this.setState({skills: res.data}))
            .catch(err => console.log('oh boi', err))
    }
    
    render() {
        let { skills } = this.state;
        if (!skills) {
            skills = [];
        }
        return(
            <Card>
                <Row>
                    <Col xs='12' m={{size: 7, offset: 1}}>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret style={btnStyle}>
                                My Skills
                            </DropdownToggle>
                            <DropdownMenu>
                                {skills.map(skill => {
                                    return (
                                        <DropdownItem key={skill._id}> 
                                        {skill.name}
                                        </DropdownItem>
                                    )
                                })}
                            </DropdownMenu>
                        </Dropdown>
                    </Col> 
                </Row>
            </Card>
        )
    }
}