import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Form } from 'react-bootstrap';

import QuestionsStats from './QuestionStats'
import { handleVote } from "../actions/questions";

class Question extends Component {
	constructor(props) {
		super(props);

		this.state = {
			vote: 'optionOne',
			showStats: props.showStats
		};
	}

	handleVote = (event) => {
		event.preventDefault();
		const { authedUser, dispatch, question } = this.props;
		dispatch(handleVote(authedUser, question.id, this.state.vote));
		this.setState({ showStats: true });
	}

	handleChange = (event) => {
		this.setState({ vote: event.currentTarget.id });
	}

	render() {
		const { authedUser, author, question } = this.props;

		if (this.state.showStats) {
			return <QuestionsStats authedUser={authedUser} author={author} question={question} />
		}

		return (
			<Card style={{ width: '425px' }}>
				<Card.Header>{author.name} asks:</Card.Header>
				<Card.Body>
					<div style={{ float: 'left' }}>
						<img
							alt="avatar"
							style={{ height: '178px', width: '178px'}}
							src={author.avatarURL} />
					</div>
					<div style={{ float: 'right' }}>
						<Card.Title>Would You Rather?</Card.Title>
						<Form onSubmit={event => this.handleVote(event)}>
							<Form.Check 
								type='radio'
								name='answer'
								id='optionOne'
								onChange={event => this.handleChange(event)}
								label={question.optionOne.text} />

							<Form.Check 
								type='radio'
								name='answer'
								id='optionTwo'
								onChange={event => this.handleChange(event)}
								label={question.optionTwo.text} />
							<Button variant="primary" type="submit">
								Vote
							</Button>
						</Form>
					</div>
				</Card.Body>
			</Card>
		);
	}
}

function mapStateToProps({ authedUser, questions, users }, { match }) {
	const question = questions[match.params.id];
	const author = users[question.author];
	const showStats = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser);

	return {
		authedUser,
		question,
		author,
		showStats
	}
}

export default connect(mapStateToProps)(Question);