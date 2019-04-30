import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardDeck } from 'react-bootstrap';

import { signIn } from '../actions/authedUser';

class SignIn extends Component {
    handleSignIn = (userId) => {
        const { dispatch } = this.props;
		dispatch(signIn(userId));
    }

    render() {
        const { users } = this.props;

		return (
            <div className='content'>
                <CardDeck>
                    {Object.values(users).map((user) => (
                        <Card
                            key={user.id}
                            onClick={() => this.handleSignIn(user.id)}>

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