import {
    GET_BOOKMARKS
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