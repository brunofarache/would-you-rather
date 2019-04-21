import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';

import { signOut } from '../actions/authedUser';

class Header extends Component {
    handleSignOut = () => {
        const { dispatch } = this.props;
		dispatch(signOut());
    }

    render() {
        const { user } = this.props;

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
                    <Image src={user.avatarURL} style={{ height: '34px', marginRight: '12px'}} roundedCircle />
                    <Button variant="outline-success" onClick={this.handleSignOut}>Sign Out</Button>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps({ authedUser, users }) {
	return {
		user: users[authedUser]
	}
}

export default connect(mapStateToProps)(Header);