import { showLoading, hideLoading } from 'react-redux-loading-bar'

import { getInitialData } from '../api/api';
import { receiveUsers } from './users';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());

        return getInitialData()
            .then(({ users }) => {
                dispatch(receiveUsers(users));
                dispatch(hideLoading());
            });
    }
}