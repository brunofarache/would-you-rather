import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Form } from 'react-bootstrap';

import { handleAddQuestion } from "../actions/questions";

class AddQuestion extends Component {
	state = {
		optionOne: '',
		optionTwo: ''
	}

	handleAddQuestion = (event)  => {
		event.preventDefault();

		const { authedUser, dispatch, history } = this.props;

		dispatch(handleAddQuestion(authedUser, this.state.optionOne, this.state.optionTwo));
		history.push('/');
	}

	handleChange = (event) => {
		this.setState({
			...this.state,
			[event.currentTarget.id]: event.currentTarget.value
		});
	}

	render() {
		return (
			<Card style={{ width: '25rem' }}>
				<Card.Header>Create New Question</Card.Header>
				<Card.Body>
					<Card.Title>Would You Rather?</Card.Title>
					<Form onSubmit={this.handleAddQuestion}>
						<Form.Group>
							<Form.Control
								type='input'
								id='optionOne'
								name='optionOne'
								onChange={this.handleChange}
								placeholder='Enter Option One Text Here' />
						</Form.Group>

						<Form.Group>
							<Form.Text>OR</Form.Text>
						</Form.Group>

						<Form.Group>
							<Form.Control
								type='input'
								id='optionTwo'
								name='optionTwo'
								onChange={this.handleChange}
								placeholder='Enter Option Two Text Here' />	
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Card.Body>
			</Card>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		authedUser
	}
}

export default connect(mapStateToProps)(AddQuestion);