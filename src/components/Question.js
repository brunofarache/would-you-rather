import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class Question extends Component {
	render() {
		const { question } = this.props;

		return (
			<Card style={{ width: '18rem' }}>
				<Card.Header>{question.author} asks:</Card.Header>
				<Card.Body>
					<Card.Title>Would You Rather?</Card.Title>
					<Card.Text>
					<Form>
						<div className="mb-3">
							<Form.Check 
								type='radio'
								id='one'
								label={question.optionOne.text}
							/>
							<Form.Check 
								type='radio'
								id='two'
								label={question.optionTwo.text}
							/>
						</div>
						</Form>
					</Card.Text>
				</Card.Body>
			</Card>
		);
	}
}

export default Question;