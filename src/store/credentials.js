// Constants
const SET_LOGIN = 'SET_LOGIN';
const SET_PASSWORD = 'SET_PASSWORD';
const RESET = 'RESET';

// Actions
export const setLogin = login => ({
    type: SET_LOGIN,
    payload: login
});

export const setPassword = password => ({
    type: SET_PASSWORD,
    payload: password
});

export const reset = () => ({
    type: RESET
});


// Reducer
const initialState = {
    login: '',
    password: ''
};

export function credentialsReducer(state = initialState, action) {
    switch(action.type) {
        case SET_LOGIN:
            return {
                ...state,
                login: action.payload
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        case RESET:
            return initialState;
        default:
            return state;
    }
}
