import {
	_saveQuestionAnswer
} from '../api/_DATA';

export const ADD_VOTE = 'ADD_VOTE';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function addVote(user, question, option) {
    return {
        type: ADD_VOTE,
        user,
        question,
        option
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function handleVote(authedUser, qid, answer) {
    return (dispatch) => {
        dispatch(addVote(authedUser, qid, answer));
        return _saveQuestionAnswer({authedUser, qid, answer}).then();
    }
}