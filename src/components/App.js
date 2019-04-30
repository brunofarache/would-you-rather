import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';

import Header from './Header';
import Home from './Home';
import SignIn from './SignIn';
import { handleInitialData } from '../actions/shared';

class App extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(handleInitialData());
	}

	render() {
		const { signedIn } = this.props;

		return (
			<div>
				{signedIn && (
					<div>
						<Header />
						<Home />
					</div>
				)}
				<LoadingBar />
				{!signedIn && (
					<SignIn />
				)}
			</div>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		signedIn: (authedUser !== null)
	}
}

export default connect(mapStateToProps)(App);