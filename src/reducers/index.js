import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'

import authedUser from './authedUser';
import users from './users';
import questions from './questions';

export default combineReducers({
    authedUser,
    questions,
    users,
    loadingBar: loadingBarReducer
});