import {
    GET_BOOKMARKS
} from '../actions/types';

const initialState = {
    loading: true, 
    bookmarks: []
}

export default function bookmarksReducer (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {

        case GET_BOOKMARKS:
            return {
                ...state,
                loading: false,
                bookmarks: payload
            }

        default: 
            return {
                ...state
            }
    }
}