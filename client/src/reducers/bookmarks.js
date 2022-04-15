import {
    GET_BOOKMARKS,
    SET_ACTIVE_BOOKMARK
} from '../actions/types';

const initialState = {
    loading: true,
    bookmarks: [],
    activeBookmark: 0
}

export default function bookmarksReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case GET_BOOKMARKS:
            return {
                ...state,
                loading: false,
                bookmarks: payload
            }

        case SET_ACTIVE_BOOKMARK:
            return {
                ...state,

                activeBookmark: payload
            }

        default:
            return {
                ...state
            }
    }
}