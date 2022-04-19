import {
    GET_BOOKMARKS,
    SET_ACTIVE_BOOKMARK,
    SAVE_BOOKMARK,
    UPDATE_BOOKMARK, 
    DELETE_BOOKMARK,
    SORT_BOOKMARKS
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
   Save Bookmark
=================================== */
export const saveBookmark = (data) => async dispatch => {
    try {
        const res = await api.post('/api/bookmark', data);

        dispatch({
            type: SAVE_BOOKMARK,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}

/* ===================================
   Edit Bookmark
=================================== */
export const updateBookmark = (id, data) => async dispatch => {
    try {
        const res = await api.put(`/api/bookmark/${id}`, data);

        dispatch({
            type: UPDATE_BOOKMARK,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}

/* ===================================
   Delete Bookmark
=================================== */
export const deleteBookmark = (id) => async dispatch => {
    try {
        const res = await api.delete(`/api/bookmark/${id}`);

        dispatch({
            type: DELETE_BOOKMARK,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}


/* ===================================
   Set active bookmark
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


/* ===================================
   Update Bookmark Sort
=================================== */
export const sortBookmarks = (data) => async dispatch => {
    try {
        const res = await api.put('/api/bookmark/sort', data);

        dispatch({
            type: SORT_BOOKMARKS,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }   
}
