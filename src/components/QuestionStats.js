import React, { Component } from 'react';
import { Badge, Card, ProgressBar } from 'react-bootstrap';

class QuestionsStats extends Component {
	constructor(props) {
		super(props);

		const { authedUser, question: { optionOne, optionTwo } } = props;
		const oneVotes = optionOne.votes.length;
		const twoVotes = optionTwo.votes.length;

		this.total = oneVotes + twoVotes;
		this.onePercentage = Math.floor((oneVotes / this.total) * 100);
		this.twoPercentage = Math.floor((twoVotes / this.total) * 100);
		this.votedOne = optionOne.votes.includes(authedUser);
		this.votedTwo = optionTwo.votes.includes(authedUser);
	}
	render() {
		
		
		return (
			<Card style={{ width: '18rem' }}>
				<Card.Header>Asked by {this.props.author.name}</Card.Header>
				<Card.Body>
					<Card.Title>Results:</Card.Title>
					<strong>Option 1:</strong><br />
					{this.props.question.optionOne.text} {this.votedOne && <Badge variant="success">Your Vote</Badge>}
					<ProgressBar
						style={{height: '35px'}}
						now={this.onePercentage}
						label={`${this.onePercentage}% (${this.oneVotes} out of ${this.total})`} />
					<strong>Option 2:</strong><br />
					{this.props.question.optionTwo.text} {this.votedTwo && <Badge variant="success">Your Vote</Badge>}
					<ProgressBar
						style={{height: '35px'}}
						now={this.twoPercentage}
						variant="warning"
						label={`${this.twoPercentage}% (${this.twoVotes} out of ${this.total})`} />
				</Card.Body>
			</Card>
		);
	}
}

export default QuestionsStats;