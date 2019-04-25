import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
	render() {
		const { answeredQuestions, unansweredQuestions } = this.props;

		return (
			<div>
				answered:
				{answeredQuestions.map(question => (
					<h2 key={question.id}>{question.optionOne.text}	</h2>
				))}

				unanswered:
				{unansweredQuestions.map(question => (
					<h2 key={question.id}>{question.optionOne.text}</h2>
				))}
			</div>
		);
	}
}

function mapStateToProps({ authedUser, questions, users }) {
	const answeredIds = Object.keys(users[authedUser].answers);

	const answeredQuestions = answeredIds.map(key => ({
		...questions[key]
	}));

	const unansweredQuestions = Object.keys(questions)
		.filter(id => !answeredIds.includes(id))
		.map(key => ({
			...questions[key]
		}));

	return {
		answeredQuestions,
		unansweredQuestions
	}
}

export default connect(mapStateToProps)(Home);