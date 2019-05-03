import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom'

import { signOut } from '../actions/authedUser';

class Header extends Component {
    handleSignOut = () => {
        const { dispatch, history } = this.props;
        dispatch(signOut());
        history.push('/');
    }

    render() {
        const { user } = this.props;

		return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
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
                        <NavLink
                            exact
                            className="nav-link"
                            to="/">
                            Home
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/add">
                            New Question
                        </NavLink>
                        <NavLink 
                            className="nav-link"
                            to="/leaderboard">
                            Leaderboard
                        </NavLink>
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

export default withRouter(connect(mapStateToProps)(Header));