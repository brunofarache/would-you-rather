import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import { Button, ListGroup } from 'react-bootstrap';

import { _getUsers } from './_DATA';

class App extends Component {
	state = {
		users: {}
	}

	componentDidMount() {
		_getUsers()
			.then((users) => this.setState({ users }));
	}

	render() {
		const { users } = this.state;

		return (
			<div>
				<ListGroup>
					{Object.keys(users).map((key) => (
						<ListGroup.Item
							action key={key}
							href={`#${key}`}>

							{key}
						</ListGroup.Item>
					))}
				</ListGroup>
				<Button>Sign In</Button>
			</div>
		);
	}
}

export default App;