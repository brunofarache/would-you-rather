import { ADD_VOTE, RECEIVE_QUESTIONS } from '../actions/questions';

export default function questions(state = {}, action) {
    switch (action.type) {
        case ADD_VOTE:
            const question = {
                ...state[action.question]
            }

            question[action.option].votes = question[action.option].votes.concat(action.user);

            return {
                ...state,
                question
            }
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        default:
            return state;
    }
}