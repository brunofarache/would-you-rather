import { ADD_VOTE, RECEIVE_QUESTIONS } from '../actions/questions';

export default function questions(state = {}, action) {
    switch (action.type) {
        case ADD_VOTE:
            const question = state[action.question];
            const option = question[action.option]; 
            const votes = option.votes.concat(action.user);

            return {
                ...state,
                [action.question]: {
                    ...question,
                    [action.option]: {
                        ...option,
                        votes
                    }
                }
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