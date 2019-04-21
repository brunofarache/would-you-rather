import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar'

import Header from './Header';
import SignIn from './SignIn';
import { handleInitialData } from '../actions/shared';

class App extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(handleInitialData());
	}

	render() {
		return (
			<div>
				<Header />
				<LoadingBar />
				<SignIn />
			</div>
		);
	}
}

export default connect()(App);