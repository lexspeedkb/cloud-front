import $ from "jquery";

// Constants
const GET_DOCUMENTS = 'GET_DOCUMENTS';

// Actions
export const getDocuments = documents => ({
    type: GET_DOCUMENTS,
    payload: documents
});

export function galleryReducer(state = [], action) {
    switch(action.type) {
        case GET_DOCUMENTS:
            return {
                ...state,
                login: action.payload
            };
        default:
            return state;
    }
}
