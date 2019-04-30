import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Form } from 'react-bootstrap';

class Question extends Component {
	render() {
		const { author, question } = this.props;

		return (
			<Card style={{ width: '18rem' }}>
				<Card.Header>{author.name} asks:</Card.Header>
				<Card.Body>
					<Card.Title>Would You Rather?</Card.Title>
					<Form>
						<Form.Check 
							type='radio'
							name='answer'
							id='one'
							label={question.optionOne.text} />
						<Form.Check 
							type='radio'
							name='answer'
							id='two'
							label={question.optionTwo.text} />
					</Form>
				</Card.Body>
			</Card>
		);
	}
}

function mapStateToProps({ questions, users }, { match }) {
	const question = questions[match.params.id];
	const author = users[question.author];

	return {
		question,
		author
	}
}

export default connect(mapStateToProps)(Question);