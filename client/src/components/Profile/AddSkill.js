import React from 'react';
import { Col, Row, Card, isOpen, toggle, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
                    <Col xs='12'>
                        <Row>
                            <Col xs='12' m={{size: 7, offset: 1}}>
                                <Dropdown isOpen={isOpen} toggle={toggle}>
                                    <DropdownToggle>
                                    Select Skill
                                    </DropdownToggle>
                                    <DropdownMenu
                                        modifiers={{
                                            setMaxHeight: {
                                                enabled: true,
                                                order: 890,
                                                fn: (data) => {
                                                    return {
                                                        ...data,
                                                        styles: {
                                                            ...data.styles,
                                                            overflow: 'auto',
                                                            maxHeight: 100,
                                                        },
                                                    };
                                                },
                                            },
                                        }}
                                    >
                                        <DropdownItem>Auto-Repair</DropdownItem>                                    
                                        <DropdownItem>Carpentry</DropdownItem>
                                        <DropdownItem>Child Care</DropdownItem>
                                        <DropdownItem>Cleaning</DropdownItem>
                                        <DropdownItem>Cooking</DropdownItem>
                                        <DropdownItem>Lawncare</DropdownItem>
                                        <DropdownItem>Music Lessons</DropdownItem>
                                        <DropdownItem>Painting</DropdownItem>
                                        <DropdownItem>Web Development</DropdownItem>
                                        <DropdownItem>Other skills</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>
                            {/* <Col xs='12' m={{size: 3, offset: 1}}>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret>
                                    Select Competency Level
                                </DropdownToggle>
                                <DropdownMenu> 
                                    <DropdownItem>Novice</DropdownItem>
                                    <DropdownItem>Intermediate</DropdownItem>
                                    <DropdownItem>Expert</DropdownItem>                                    
                                </DropdownMenu>
                            </Dropdown> */}
                            </Col>
                        </Row>
                    </Col> 
                </Row>
            </Card>
        )
    }
}