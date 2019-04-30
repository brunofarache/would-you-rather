import { ADD_VOTE } from '../actions/questions';
import { RECEIVE_USERS } from '../actions/users';

export default function users(state = {}, action) {
    switch (action.type) {
        case ADD_VOTE:
            const user = state[action.user];
            const answers = user.answers;

            return {
                ...state,
                [action.user]: {
                    ...user,
                    answers: {
                        ...answers,
                        [action.question]: action.option
                    }
                }
            }
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        default:
            return state;
    }
}