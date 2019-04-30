import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs } from 'react-bootstrap';

import QuestionsList from "./QuestionsList.js";

class Home extends Component {
	render() {
		const { answeredQuestions, unansweredQuestions, users } = this.props;

		return (
			<Tabs defaultActiveKey="answered">
				<Tab eventKey="answered" title="Answered Questions">
					<QuestionsList questions={answeredQuestions} users={users} />
				</Tab>
				<Tab eventKey="unanswered" title="Unanswered Questions">
					<QuestionsList questions={unansweredQuestions} users={users} />
				</Tab>
			</Tabs>
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
		unansweredQuestions,
		users
	}
}

export default connect(mapStateToProps)(Home);