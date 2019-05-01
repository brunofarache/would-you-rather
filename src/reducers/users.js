import { ADD_QUESTION, ADD_VOTE } from '../actions/questions';
import { RECEIVE_USERS } from '../actions/users';

export default function users(state = {}, action) {
    switch (action.type) {
        case ADD_QUESTION:
            const author = state[action.question.author];

            return {
                ...state,
                [action.question.author]: {
                    ...author,
                    questions: author.questions.concat(action.question.id)
                }
            };
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