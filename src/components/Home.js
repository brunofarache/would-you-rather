import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs } from 'react-bootstrap';

import { Route, Switch } from "react-router-dom";

import Question from "./Question.js";
import QuestionsList from "./QuestionsList.js";

class Home extends Component {
	render() {
		const { answeredQuestions, unansweredQuestions, users } = this.props;

		return (
			<Switch>
				<Route path='/' exact render={() =>
					<Tabs defaultActiveKey="unanswered">
						<Tab eventKey="unanswered" title="Unanswered Questions">
							<QuestionsList
								questions={unansweredQuestions}
								users={users} />
						</Tab>
						<Tab eventKey="answered" title="Answered Questions">
							<QuestionsList
								questions={answeredQuestions} 
								users={users} />
						</Tab>
					</Tabs>
				} />
				<Route path='/questions/:id' component={Question} />
			</Switch>
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