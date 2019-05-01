import {
    _saveQuestion,
	_saveQuestionAnswer
} from '../api/_DATA';

export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_VOTE = 'ADD_VOTE';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

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

export function handleAddQuestion(author, optionOneText, optionTwoText) {
    return (dispatch) => {
        return _saveQuestion({author, optionOneText, optionTwoText})
            .then((question) => {
                dispatch(addQuestion(question));
            });
    }
}

export function handleVote(authedUser, qid, answer) {
    return (dispatch) => {
        dispatch(addVote(authedUser, qid, answer));
        return _saveQuestionAnswer({authedUser, qid, answer}).then();
    }
}