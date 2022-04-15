import {
    GET_IMAGES
} from './types';

import api from '../utils/api';



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