import {
    GET_BOOKMARKS,
    SET_ACTIVE_BOOKMARK
} from './types';

import api from '../utils/api';


/* ===================================
   Get bookmarks
=================================== */
export const getBookmarks = () => async dispatch => {
    try {
        const res = await api.get('/api/bookmark');

        dispatch({
            type: GET_BOOKMARKS,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}


/* ===================================
   Set Active Bookmark
=================================== */
export const setActiveBookmark = (index) => async dispatch => {
    try {
        dispatch({
            type: SET_ACTIVE_BOOKMARK,
            payload: index
        })
    } catch (err) {
        console.log(err)
    }
}