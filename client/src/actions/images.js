import {
    GET_IMAGES,
    CLEAR_IMAGES
} from './types';

import api from '../utils/api';


/* ===================================
   Get images
=================================== */
export const getImages = ( activeBookmarkId ) => async dispatch => {
    try {
        const res = await api.get(`/api/image/${activeBookmarkId}`);

        dispatch({
            type: GET_IMAGES,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}

/* ===================================
   Clear images
=================================== */
export const clearImages = () => async dispatch => {
    try {
        dispatch({
            type: CLEAR_IMAGES
        })
    } catch (err) {
        console.log(err)
    }
}
