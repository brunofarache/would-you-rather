import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

class Leaderboard extends Component {
	render() {
		return (
			<div>
				{this.props.users.map(user => (
					<Card style={{ width: '425px' }}>
						<Card.Header>{user.name}</Card.Header>
						<Card.Body>
							<div style={{ float: 'left' }}>
								<img
									alt="avatar	"
									style={{ height: '178px', width: '178px'}}
									src={user.avatarURL} />
							</div>
							<div style={{ float: 'right' }}>
								<Card.Title>Total Score: {user.score}</Card.Title>
								<Card.Text>
									Answered Questions: {user.answeredQuestions} <br />
									Created Questions: {user.createdQuestions}
								</Card.Text>
							</div>
						</Card.Body>
					</Card>
				))}
			</div>
		);
	};
}


function mapStateToProps({ users }) {
	return {
		users: Object.values(users)
			.map((user) => ({
				...user,
				answeredQuestions: Object.keys(user.answers).length,
				createdQuestions: user.questions.length,
				score: Object.keys(user.answers).length + user.questions.length
			}))
			.sort((a, b) => b.score - a.score)
	}
}

export default connect(mapStateToProps)(Leaderboard);