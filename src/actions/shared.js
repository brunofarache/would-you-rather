import { showLoading, hideLoading } from 'react-redux-loading-bar'

import { getInitialData } from '../api/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());

        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            });
    }
}