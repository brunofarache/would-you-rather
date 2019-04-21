export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export function signIn(userId) {
    return {
        type: SIGN_IN,
        userId
    }
}

export function signOut() {
    return {
        type: SIGN_OUT
    }
}