import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'

import authedUser from './authedUser';
import users from './users';

export default combineReducers({
    authedUser,
    users,
    loadingBar: loadingBarReducer
});