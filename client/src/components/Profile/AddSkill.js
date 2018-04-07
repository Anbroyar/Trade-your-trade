import React from 'react';
import { Col, Row, Card, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class AddSkill extends React.Component{
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
    
    render() {
        return(
            <Card>
                <Row>
                    <Col xs='12' m={{size: 7, offset: 1}}>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret>
                                My Skills
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