import React from 'react';
import { Col, Row, Card, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from "axios";

export default class AddSkill extends React.Component{

    state: {
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
        return(
            <Card>
                <Row>
                    <Col xs='12' m={{size: 7, offset: 1}}>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret>
                                Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                                {/* WE NEED TO MAP THE SKILLS FROM DB HERE */}
                                <DropdownItem>Auto repair</DropdownItem>
                                <DropdownItem>Carpentry</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col> 
                </Row>
            </Card>
        )
    }
}