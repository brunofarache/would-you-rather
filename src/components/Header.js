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
                <Navbar.Brand href="#home">
                    <Image
                        src={user.avatarURL}
                        className="d-inline-block align-top"
                        style={{ height: '30px', marginRight: '8px'}} 
                        roundedCircle />
                        {`${user.name}`}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/add">New Question</Nav.Link>
                        <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                    </Nav>
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