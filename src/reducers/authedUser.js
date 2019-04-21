import { SIGN_IN, SIGN_OUT } from '../actions/authedUser';

export default function authedUser(state = null, action) {
    switch (action.type) {
        case SIGN_IN:
            return action.userId;
        case SIGN_OUT:
            return null;
        default:
            return state;
    }
}