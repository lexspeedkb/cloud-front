// Constants
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

// Actions
export const addUser = user => ({
    type: ADD_USER,
    payload: user
});

export const removeUser = (login) => ({
    type: REMOVE_USER,
    payload: login
});

// Reducer
export function usersReducer(state = [], action) {
    switch (action.type) {
        case ADD_USER:
            return [action.payload];
        case REMOVE_USER:
            return state.filter(user => user.login !== action.payload);
        default:
            return state;
    }
}
