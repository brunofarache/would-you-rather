import React, { Component } from 'react';
import { Badge, Card, ProgressBar } from 'react-bootstrap';

class QuestionsStats extends Component {
	render() {
		const { authedUser, author, question: { optionOne, optionTwo } } = this.props;
		const oneVotes = optionOne.votes.length;
		const twoVotes = optionTwo.votes.length;
		const total = oneVotes + twoVotes;
		const onePercentage = Math.floor((oneVotes / total) * 100);
		const twoPercentage = Math.floor((twoVotes / total) * 100);
		const votedOne = optionOne.votes.includes(authedUser);
		const votedTwo = optionTwo.votes.includes(authedUser);
		
		return (
			<Card style={{ width: '18rem' }}>
				<Card.Header>Asked by {author.name}</Card.Header>
				<Card.Body>
					<Card.Title>Results:</Card.Title>
					{optionOne.text} {votedOne && <Badge variant="success">Your Vote</Badge>}
					<ProgressBar
						style={{height: '35px'}}
						now={onePercentage}
						label={`${onePercentage}% (${oneVotes} out of ${total})`} />
					{optionTwo.text} {votedTwo && <Badge variant="success">Your Vote</Badge>}
					<ProgressBar
						style={{height: '35px'}}
						now={twoPercentage}
						variant="warning"
						label={`${twoPercentage}% (${twoVotes} out of ${total})`} />
				</Card.Body>
			</Card>
		);
	}
}

export default QuestionsStats;