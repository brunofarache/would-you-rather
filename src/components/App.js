import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar'

import { handleInitialData } from '../actions/shared';

class App extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(handleInitialData());
	}

	render() {
		const { users } = this.props;

		return (
			<div>
				<LoadingBar />
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
			</div>
		);
	}
}

function mapStateToProps ({ users }) {
	return {
		users
	}
}

export default connect(mapStateToProps)(App);