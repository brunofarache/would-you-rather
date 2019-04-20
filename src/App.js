import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Card, CardDeck } from 'react-bootstrap';

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
			<div className='sign-in'>
				<CardDeck>
					{Object.values(users).map((user) => (
						<Card key={user.id}>
							<Card.Img variant="top" src={user.avatarURL} />
							<Card.Body>
								<Card.Text>{user.id}</Card.Text>
							</Card.Body>
						</Card>
					))}
				</CardDeck>
			</div>
		);
	}
}

export default App;