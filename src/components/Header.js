import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
    render() {
		return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Would You Rather?</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#add">New Question</Nav.Link>
                        <Nav.Link href="#link">Leaderboard</Nav.Link>
                    </Nav>
                    <Button variant="outline-success">Sign Out</Button>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default connect()(Header);