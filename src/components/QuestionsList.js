import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { withRouter } from "react-router";

class QuestionsList extends Component {
	handleClick = (id) => {
		const { history } = this.props;
		history.push(`/questions/${id}`);
	}

	render() {
		const { questions, users } = this.props;

		return (
			<CardDeck style={{ padding: '40px'}}>
				{questions.map(question => (
					<Card
						key={question.id}
						style={{ width: '178px'}}
						onClick={() => this.handleClick(question.id)}>

						<Card.Img
							variant="top"
							style={{ height: '178px', width: '178px'}}
							src={users[question.author].avatarURL} />
						<Card.Body>
							<Card.Title>Would You Rather?</Card.Title>
							<Card.Text>
								{question.optionOne.text} or {question.optionTwo.text}
							</Card.Text>
						</Card.Body>
					</Card>
				))}
			</CardDeck>
		);
	}
}

export default withRouter(QuestionsList);