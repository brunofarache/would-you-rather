import React from 'react';
import { Badge, Card, ProgressBar } from 'react-bootstrap';

const QuestionsStats = (props) => {
	const { authedUser, question: { optionOne, optionTwo } } = props;
	const oneVotes = optionOne.votes.length;
	const twoVotes = optionTwo.votes.length;

	const total = oneVotes + twoVotes;
	const onePercentage = Math.floor((oneVotes / total) * 100);
	const twoPercentage = Math.floor((twoVotes / total) * 100);
	const votedOne = optionOne.votes.includes(authedUser);
	const votedTwo = optionTwo.votes.includes(authedUser);
	
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Header>Asked by {props.author.name}</Card.Header>
			<Card.Body>
				<Card.Title>Results:</Card.Title>
				<strong>Option 1:</strong><br />
				{props.question.optionOne.text} {votedOne && <Badge variant="success">Your Vote</Badge>}
				<ProgressBar
					style={{height: '35px'}}
					now={onePercentage}
					label={`${onePercentage}% (${oneVotes} out of ${total})`} />
				<strong>Option 2:</strong><br />
				{props.question.optionTwo.text} {votedTwo && <Badge variant="success">Your Vote</Badge>}
				<ProgressBar
					style={{height: '35px'}}
					now={twoPercentage}
					variant="warning"
					label={`${twoPercentage}% (${twoVotes} out of ${total})`} />
			</Card.Body>
		</Card>
	);
};

export default QuestionsStats;