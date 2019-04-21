import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardDeck } from 'react-bootstrap';

class SignIn extends Component {
    render() {
        const { users } = this.props;

		return (
            <div className='sign-in'>
                <CardDeck>
                    {Object.values(users).map((user) => (
                        <Card key={user.id}>
                            <Card.Img variant="top" src={user.avatarURL} />
                            <Card.Body>
                                <Card.Text>{user.id}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </CardDeck>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
	return {
		users
	}
}

export default connect(mapStateToProps)(SignIn);