import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'

import users from './users';

export default combineReducers({
    users,
    loadingBar: loadingBarReducer
});