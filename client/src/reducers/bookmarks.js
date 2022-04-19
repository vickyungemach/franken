import {
    GET_BOOKMARKS,
    SET_ACTIVE_BOOKMARK,
    SAVE_BOOKMARK,
    UPDATE_BOOKMARK,
    DELETE_BOOKMARK,
    SORT_BOOKMARKS
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

        case SAVE_BOOKMARK:
            return {
                ...state,
                bookmarks: [...state.bookmarks, payload],
                loading: false
            }

        case UPDATE_BOOKMARK:
            return {
                ...state,
                bookmarks: state.bookmarks.map(item => {
                    if (item._id === payload._id) {
                        return payload
                    } else {
                        return item
                    }
                })
            }

        case DELETE_BOOKMARK:
            return {
                ...state,
                bookmarks: state.bookmarks.filter(item => item._id !== payload._id)
            }

        case SET_ACTIVE_BOOKMARK:
            return {
                ...state,
                activeBookmark: payload
            }

        case SORT_BOOKMARKS:
            return {
                ...state,
                bookmarks: payload,
                loading: false
            }

        default:
            return {
                ...state
            }
    }
}